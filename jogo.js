// ====== PERGUNTAS DO JOGO ======
const perguntas = [
  {
    pergunta: "Qual é a linguagem mais usada para desenvolvimento web?",
    opcoes: ["Python", "JavaScript", "C++", "Java"],
    correta: "JavaScript"
  },
  {
    pergunta: "O que significa IA?",
    opcoes: ["Internet Avançada", "Inteligência Artificial", "Inovação Aplicada", "Interface Automatizada"],
    correta: "Inteligência Artificial"
  },
  {
    pergunta: "Qual dispositivo usamos para digitar em computadores?",
    opcoes: ["Mouse", "Teclado", "Monitor", "Impressora"],
    correta: "Teclado"
  }
];

let perguntaAtual = 0;
let pontuacao = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesContainer = document.getElementById("opcoes-container");
const proximaBtn = document.getElementById("proxima-btn");
const resultadoEl = document.getElementById("resultado");
const pontuacaoEl = document.getElementById("pontuacao");

// ====== FUNÇÕES PRINCIPAIS ======
function mostrarPergunta() {
  const q = perguntas[perguntaAtual];
  perguntaEl.innerText = q.pergunta;
  opcoesContainer.innerHTML = "";
  q.opcoes.forEach(opcao => {
    const btn = document.createElement("button");
    btn.innerText = opcao;
    btn.addEventListener("click", () => selecionarResposta(opcao));
    opcoesContainer.appendChild(btn);
  });
  proximaBtn.style.display = "none";
}

function selecionarResposta(opcao) {
  if (opcao === perguntas[perguntaAtual].correta) pontuacao++;
  Array.from(opcoesContainer.children).forEach(btn => btn.disabled = true);
  proximaBtn.style.display = "block";
}

function proximaPergunta() {
  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.querySelector(".quiz-container").classList.add("hidden");
  resultadoEl.classList.remove("hidden");
  pontuacaoEl.innerText = `Sua pontuação: ${pontuacao} / ${perguntas.length}`;
}

function reiniciarJogo() {
  perguntaAtual = 0;
  pontuacao = 0;
  resultadoEl.classList.add("hidden");
  document.querySelector(".quiz-container").classList.remove("hidden");
  mostrarPergunta();
}

// ====== BOTÃO VOLTAR À TELA INICIAL ======
const voltarBtn = document.getElementById("voltarBtn");
voltarBtn.addEventListener("click", () => {
  window.location.href = "index.html"; // redireciona para a página inicial
});

// ====== INICIAR JOGO ======
mostrarPergunta();

