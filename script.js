// --- Smooth Scrolling for Navigation ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default hash behavior only for internal links
        if (this.getAttribute('href').length > 1) { 
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Enables smooth scrolling
                });
            }
        }
    });
});

// --- Simple Scroll-Reveal (Fades sections in as they become visible) ---
const sections = document.querySelectorAll('.section');

const options = {
    root: null, // viewport
    threshold: 0.1, // trigger when 10% of section is visible
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        // Add the 'visible' class defined in style.css to trigger the fade-in
        entry.target.classList.add('visible'); 
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});