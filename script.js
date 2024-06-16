const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você sabe como funciona o CBLOL?",
        alternativas: [
            {
                texto: "Sim, sei todo o funcionamento!",
                afirmacao: "Ótimo começo, entender o CBLOL."
            },
            {
                texto: "Infelizmente ainda não!",
                afirmacao: "Você ainda é inexperiente. "
            }
        ]
    },
    {
        enunciado: "Você é torcedor do maior time de lol ?",
        alternativas: [
            {
                texto: "SIM, sou torcedor da PAiN, #tradição.",
                afirmacao: "Sua torcida é incrível."
            },
            {
                texto: "Sou loudete, faço o L sempre",
                afirmacao: "Sua torcida é modinha."
            }
        ]
    },
    {
        enunciado: " A Pain de 2015 foi sensasional? ",
        alternativas: [
            {
                texto: "Aquilo não era um time, mas uma seleção .",
                afirmacao: "Realmente a PAIN daquele tempo era forte. "
            },
            {
                texto: "Não, era um time limitado que tinha sorte .",
                afirmacao: " Eles ganharam um CBLOL daquele ano. "
            }
        ]
    },
    {
        enunciado: "Seu jogador preferido é quem?",
        alternativas: [
            {
                texto: "Mylon .",
                afirmacao: "Você sabe muito das coisas."
            },
            {
                texto: "Robs.",
                afirmacao: "Ainda pode voltar atrás."
            }
        ]
    },
    {
        enunciado: "O que significa cblol ? ",
        alternativas: [
            {
                texto: "Campeonato Brasileiro de League of Legends .",
                afirmacao: "esse é o significado.. "
            },
            {
                texto: "Apenas mais um campeoanto onde a Pain domina",
                afirmacao: "Parabéns é isso aí. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativ1as.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Portanto...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
