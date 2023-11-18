function aumentarFonte() {
    var tamanhoAtual = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
            document.body.style.fontSize = (tamanhoAtual + 2) + 'px';
}

function diminuirFonte() {
    var tamanhoAtual = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
            document.body.style.fontSize = (Math.max(tamanhoAtual - 2, 10)) + 'px';
}