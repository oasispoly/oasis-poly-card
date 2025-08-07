document.addEventListener('DOMContentLoaded', function() {
    // Gestion du préchargeur
    let progress = 0;
    const progressBar = document.querySelector('.progress-bar');
    const preloader = document.querySelector('.preloader');
    
    const loadInterval = setInterval(() => {
        progress += Math.random() * 20;
        progressBar.style.width = `${progress}%`;
        
        if(progress >= 100) {
            clearInterval(loadInterval);
            document.body.classList.add('loaded');
            
            // Animation au scroll
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                document.documentElement.style.setProperty('--scroll', `${scrolled / 1000}`);
            });
        }
    }, 100);

    // Interactions au survol
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            item.style.setProperty('--x', `${x}px`);
            item.style.setProperty('--y', `${y}px`);
        });
    });

    // Animation des sections
    const animatedSections = document.querySelectorAll('.animated-section');
    animatedSections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
    });

    // Interaction logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'rotate(-5deg) scale(1.1)';
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'none';
    });
});
