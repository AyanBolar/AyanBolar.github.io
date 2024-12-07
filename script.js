// GSAP animation for hero section and skill progress bars
document.addEventListener('DOMContentLoaded', function() {
    // Animate hero text
    gsap.from("#hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from("#hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".cta", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });

    // Skill progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const skillValue = bar.getAttribute('data-skill');
        gsap.to(bar, { width: skillValue + '%', duration: 2, delay: 1.5 });
    });
});
