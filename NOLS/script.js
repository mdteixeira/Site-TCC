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

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);