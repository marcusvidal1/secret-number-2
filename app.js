let listaNumerosGerados = [];
let limiteLista = 10;
let numeroSecreto = gerarNumeroSecreto();
console.log(numeroSecreto);
let numeroDeTentativas = 1;

function gerarNumeroSecreto() { 
    let numeroGerado = parseInt(Math.random() * 100 + 1);
    let tamanhoLista = listaNumerosGerados.length;
    if (tamanhoLista == limiteLista) {
        listaNumerosGerados = []
    }
   if (listaNumerosGerados.includes(numeroGerado)) {
        return gerarNumeroSecreto();
    } else {
        listaNumerosGerados.push(numeroGerado);
        console.log(listaNumerosGerados);
        return numeroGerado;
    }
}

function exibirTexto(tag, texto) {
    let espaçoParaTexto = document.querySelector(tag);
    espaçoParaTexto.innerHTML = texto;
}

function exibirTextoInicial() {
exibirTexto('h1', 'Secret Number');
exibirTexto('p', 'Escolha um número de 1 a 100');
};

exibirTextoInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Correto!');
        let palavraTentativa = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTexto('p', `Você acertou o número secreto em ${numeroDeTentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        numeroDeTentativas = 1
    } 
    else {
        if (chute > numeroSecreto) {
            exibirTexto('p', `O número secreto é menor que ${chute}.`);}
        else {
            exibirTexto('p', `O número secreto é maior que ${chute}.`);}
           
            if (chute > 100) {
                exibirTexto('p', 'Atenção, escolha um número de 1 a 100.');
            }  
            if (chute < 1){
                exibirTexto('p', 'Atenção, escolha um número de 1 a 100.');
            }
            
            numeroDeTentativas++;
            limparCampoResposta();
 }
};

function limparCampoResposta() { 
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    exibirTextoInicial();
    limparCampoResposta();
    tentativas = 1;
    console.log(numeroSecreto);
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
