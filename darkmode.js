document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Carrega o estado do modo escuro do localStorage, se disponível
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.textContent = '☀️'; // Muda ícone para Sol no modo escuro
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Salva o estado no localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            toggleButton.textContent = '☀️';
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            toggleButton.textContent = '🌙';
        }
    });
});