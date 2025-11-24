document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll Reveal Animation Logic
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'active' class when element enters viewport
                entry.target.classList.add('active');
                // Optional: Stop observing once it's active
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove 'active' class when element leaves viewport
                // entry.target.classList.remove('active');
            }
        });
    }, {
        // Options for the Intersection Observer
        root: null, // Viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    });

    // Elements to apply the reveal animation to
    const revealElements = document.querySelectorAll(
        '.reveal-text, .reveal-card, .reveal-skill, .reveal-icon'
    );

    revealElements.forEach(element => {
        observer.observe(element);
    });

    // --- Active Link Highlight (Optional but good practice) ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to the link corresponding to the current section
                const targetLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px', // Center of the viewport
        threshold: 0 // Observe as soon as the section hits the center
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});