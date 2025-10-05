// Mostrar animações conforme o usuário rola a página
const containers = document.querySelectorAll('.container');

window.addEventListener('scroll', () => {
  const gatilho = window.innerHeight * 0.8;
  containers.forEach(container => {
    const topo = container.getBoundingClientRect().top;
    if (topo < gatilho) {
      container.classList.add('show');
    }
  });
});

// Botão de voltar ao topo
const btnTopo = document.getElementById('btnTopo');
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};
btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Abrir jogo da SETEC
function abrirJogo() {
  window.location.href = "jogo.html";
}
