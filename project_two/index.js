document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.querySelector('.scroll-button');
    
    scrollButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(scrollButton.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
