window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;

        if (sectionTop + sectionHeight / 2 < windowHeight) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
