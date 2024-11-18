document.addEventListener("DOMContentLoaded", function() {
    const bannerContainer = document.querySelector(".banner-container");
    let currentSlide = 0;
    const slides = document.querySelectorAll(".banner-slide");
    let interval;

    // Função para exibir o próximo slide
    function showNextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        bannerContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Inicia a rotação automática
    function startAutoSlide() {
        interval = setInterval(showNextSlide, 5000); // Muda de slide a cada 5 segundos
    }

    // Para a rotação automática
    function stopAutoSlide() {
        clearInterval(interval);
    }

    // Começa a rotação automática
    startAutoSlide();

    // Pausa a rotação automática quando o mouse entra no banner
    bannerContainer.addEventListener("mouseenter", stopAutoSlide);
    bannerContainer.addEventListener("mouseleave", startAutoSlide);

    // Funções para controle manual dos slides
    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        bannerContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function showNextSlideManually() {
        showNextSlide();
    }

    // Atribuindo os eventos aos botões de navegação manual
    const prevButton = document.getElementById("prev-slide");
    const nextButton = document.getElementById("next-slide");

    if (prevButton) {
        prevButton.addEventListener("click", showPrevSlide);
    }

    if (nextButton) {
        nextButton.addEventListener("click", showNextSlideManually);
    }
});

// Lista de sugestões para pesquisa (exemplo)
const newsSuggestions = [
    "Tecnologia no Brasil",
    "Avanços em Saúde",
    "Cultura e Entretenimento",
    "Desenvolvimento Sustentável",
    "Fintechs Emergentes",
    "Educação à Distância",
    "Novidades em Inteligência Artificial",
];

// Função para exibir sugestões com base no input do usuário
function showSuggestions(value) {
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = ""; // Limpa as sugestões anteriores

    if (value) {
        const filteredSuggestions = newsSuggestions.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        );

        // Exibe cada sugestão que corresponde ao valor pesquisado
        filteredSuggestions.forEach((suggestion) => {
            const suggestionItem = document.createElement("div");
            suggestionItem.classList.add("suggestion-item");
            suggestionItem.textContent = suggestion;
            suggestionItem.onclick = () => selectSuggestion(suggestion);
            suggestionsDiv.appendChild(suggestionItem);
        });
    }
}

// Função para selecionar uma sugestão
function selectSuggestion(suggestion) {
    document.getElementById("search-input").value = suggestion;
    document.getElementById("suggestions").innerHTML = ""; // Limpa as sugestões
    search(); // Executa a pesquisa
}

// Função de pesquisa simulada
function search() {
    const query = document.getElementById("search-input").value;
    alert(`Você pesquisou por: ${query}`);
}

// Seleciona o botão de modo escuro e o corpo da página
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Verifica o estado salvo no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');

    // Ativa o modo escuro se estiver salvo como "enabled"
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
    }
});

// Adiciona o evento ao botão de modo escuro, se ele existir
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        // Alterna a classe para mudar o modo
        body.classList.toggle('dark-mode');

        // Salva o estado no localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}
