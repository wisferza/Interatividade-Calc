//comentários são feitos usando "//"
const botao = document.getElementById('botao'); //Seleciona os elementos necessários
const lampada = document.getElementById('lampada'); //Seleciona os elementos necessários
const statusTexto = document.getElementById('status'); //Seleciona os elementos necessários

function alternarLampada() { //Função para alternar o estado da lâmpada
    if (botao.textContent == 'Ligar') { //Muda para o estado "aceso"
        lampada.src = 'LampAcs.png'; //Caminho da imagem acesa
        botao.textContent = 'Desligar'; //muda o texto do botão para "apagar"
        statusTexto.textContent = 'Aceso'; //Muda o status para "Aceso"
        statusTexto.style.color = 'orange'; //Muda a cor do texto para laranja
        statusTexto.style.fontSize = '30px';
    }
    else { //Muda para o estado "apagado"
        lampada.src = 'LampApg.png'; //Caminho da imagem apagada
        botao.textContent = 'Ligar'; //Muda o texto do botão para "ligar"
        statusTexto.textContent = 'Apagado'; //Muda o status para "Apagado"
        statusTexto.style.fontSize = '30px';
        statusTexto.style.color = 'rgb(126, 125, 125'; //Muda a cor do texto para cinza
    }
}
botao.addEventListener('click', alternarLampada);