const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAvancar = document.getElementById('proximo');

const numeroCapitulos = 10;
let audioTocando = 0; /*vai checar se esá tocando, inicia sem tocar com o O*/
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-fill'); /*alterando o botão de play por pause*/
    botaoPlayPause.classList.add('bi-pause-fill');
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-fill'); /*alterando o botão de pause por play*/
    botaoPlayPause.classList.add('bi-play-fill');
}

function tocarOuPausar() {
    if (audioTocando === 0) {
        tocarFaixa();
        audioTocando = 1;
    } else {
        pausarFaixa();
        audioTocando = 0;
    }
}

function proximaFaixa() {
    if ( capituloAtual === numeroCapitulos ) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    audioTocando = 1;
}

function voltarFaixa() {
    if ( capituloAtual === numeroCapitulos ) {
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    audioTocando = 1;
}

botaoPlayPause.addEventListener('click', tocarOuPausar);

botaoAvancar.addEventListener('click', proximaFaixa);



