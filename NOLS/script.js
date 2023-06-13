function whatsapp() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var mensagem = document.getElementById('comentario').value;
    var newnome = ''

    if (nome.length > 0) {
        newnome = ' Me chamo ' + nome;
    }
    if (sobrenome.length > 0) {
        newnome += ' ' + sobrenome;
    }
    newnome += '.'
    var url = 'https://wa.me/11993602212?text=' + 'Olá, NOLS' + newnome + ' ' + mensagem;

    window.open(url, '_blank').focus();
}
