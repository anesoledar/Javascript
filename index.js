// floor arredonda o número pra baixo. Se usar *10 ele gera números de 0 a 10 (*1000 de 0 a 1000 e assim vai).
var numeroAleatorio= Math.floor(Math.random() * 100) + 1;

var contadorDePalpites = document.querySelector('.contadorDePalpites');
var ultimoResultado = document.querySelector('.historico');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpites = 1;
var botaoReinicio;


function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        contadorDePalpites.textContent = 'Histórico de números tentados: ';
    }
    contadorDePalpites.textContent += palpiteUsuario + ' | ';
  
    if (palpiteUsuario === numeroAleatorio) {
      ultimoResultado.textContent = 'Parabéns! Você acertou!';
      ultimoResultado.style.color = 'green';
      baixoOuAlto.textContent = '';
      configFimDeJogo();
    } else if (contagemPalpites === 10) {
      ultimoResultado.textContent = '!!!GAME OVER!!!';
      ultimoResultado.style.color = 'red';
      baixoOuAlto.textContent = '';
      configFimDeJogo();
    } else {
      ultimoResultado.textContent = 'Errado!';
      ultimoResultado.style.color = 'red';
      if(palpiteUsuario < numeroAleatorio) {
        baixoOuAlto.textContent = 'O número é maior que seu palpite. Tente novamente!';
      } else if(palpiteUsuario > numeroAleatorio) {
        baixoOuAlto.textContent = 'O número é menor que seu palpite. Tente novamente';
      }
    }
  
    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
  }

  envioPalpite.addEventListener('click', conferirPalpite);

  function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
  }

  function reiniciarJogo() {
    contagemPalpites = 1;
  
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0 ; i < reiniciarParas.length ; i++) {
      reiniciarParas[i].textContent = '';
    }
  
    botaoReinicio.parentNode.removeChild(botaoReinicio);
  
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();
  
   
  
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  }