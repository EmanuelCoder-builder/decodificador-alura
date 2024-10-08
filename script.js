
function criptografar(msg) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let cript = [];
    let separ = msg.split(' ');

    separ.forEach(ele => {
        if (vogais.some(letra => ele.includes(letra))) {
            let x = ele.replace(/e/g, "enter")
                       .replace(/i/g, "imes")
                       .replace(/a/g, "ai")
                       .replace(/o/g, "ober")
                       .replace(/u/g, "ufat");
            cript.push(x);
        } else {
            cript.push(ele);
        }
    });

    let junto = cript.join(' ');
    return junto;
}


function descriptografar(msg) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let descript = [];
    let separ = msg.split(' ');

    separ.forEach(ele => {
        if (vogais.some(letra => ele.includes(letra))) {
            let x = ele.replace(/enter/g, "e")
                       .replace(/imes/g, "i")
                       .replace(/ai/g, "a")
                       .replace(/ober/g, "o")
                       .replace(/ufat/g, "u");
            descript.push(x);
        } else {
            descript.push(ele);
        }
    });

    let junto = descript.join(' ');
    return junto;
}


function processarTexto(acao) {
    const textoArea = document.querySelector('.text-area').value;
    let resultado;

    if (acao === 'criptografar') {
        resultado = criptografar(textoArea);
        document.getElementById('resultado-titulo').textContent = 'Texto Criptografado:';
    } else if (acao === 'descriptografar') {
        resultado = descriptografar(textoArea);
        document.getElementById('resultado-titulo').textContent = 'Texto Descriptografado:';
    }

    
    document.getElementById('resultado-texto').textContent = resultado;

    
    document.getElementById('illustration').style.display = 'none';

    
    document.getElementById('btn-copy').classList.remove('hidden');
}


function copiarTexto() {
    const texto = document.getElementById('resultado-texto').textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}
