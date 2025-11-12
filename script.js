const frases = [
    "A vida é 10% o que acontece comigo e 90% como eu reajo a isso.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Acredite que você pode, assim você já está no meio do caminho.",
    "Não espere por oportunidades, crie-as.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz."
];

const paragrafo = document.getElementById("frase");
const botao = document.getElementById("botao");

function gerarFrases() {
    const numero = Math.floor(Math.random() * frases.length);
   
    if (paragrafo) {
        paragrafo.innerText = frases[numero];
    } else {
        console.error("Parágrafo com id='frase' não encontrado.");
    }
}

if (botao) {
    botao.addEventListener("click", gerarFrases);
} else {
    console.error("Botão com id='botao' não encontrado.");
}