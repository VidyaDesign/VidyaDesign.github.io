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
