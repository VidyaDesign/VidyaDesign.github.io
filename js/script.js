// Atualização do ano atual no rodapé

document.addEventListener("DOMContentLoaded", function () {
  // 1. Obter a referência para o elemento <span> pelo ID
  const yearElement = document.getElementById("current-year");

  // 2. Verificar se o elemento existe na página
  if (yearElement) {
    // 3. Obter o ano atual
    const currentYear = new Date().getFullYear();

    // 4. Atualizar o conteúdo do elemento <span> com o ano atual
    yearElement.textContent = currentYear;
  }
});

// --- NOVO: Controle do Menu Mobile ---

document.addEventListener("DOMContentLoaded", function () {
  // 1. Atualização do ano (código original mantido)
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  }

  // --- NOVO: Controle do Menu Mobile ---
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (hamburger && mobileMenu) {
    // Função para alternar o menu
    function toggleMenu() {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    }

    // Clique no hamburger
    hamburger.addEventListener("click", toggleMenu);

    // Clique fora do menu ou em um link fecha o menu
    mobileMenu.addEventListener("click", function (e) {
      if (e.target === mobileMenu || e.target.tagName === "A") {
        toggleMenu();
      }
    });

    // Suporte ao teclado (acessibilidade)
    hamburger.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
      }
    });
  }
});
