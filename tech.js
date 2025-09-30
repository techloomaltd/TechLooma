//toggle menu on mobile

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function() {

    const aboutContainers = document.querySelectorAll('.about-container');

    if(aboutContainers.length){
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        aboutContainers.forEach(container => observer.observe(container));
    }

});
// Portfolio fade-in animation
const portfolioItems = document.querySelectorAll('.portfolio-item');
if(portfolioItems.length){
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    portfolioItems.forEach(item => observer.observe(item));
}
// Initialize EmailJS
emailjs.init("pFThzJshdnZ-wc872"); // Replace with your EmailJS User ID

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        emailjs.sendForm('service_av0vm4o', 'template_m11xp4v', this)
            .then(() => {
                status.textContent = "Message sent successfully!";
                form.reset();
            }, (err) => {
                status.textContent = "Failed to send message. Please try again.";
                console.error(err);
            });
    });
});
// ===== Mobile Navbar Toggle =====
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");
  
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
    }
  });
  // ===== Services Animation on Scroll =====
document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".service-item");
  
    const revealOnScroll = () => {
      serviceItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (itemTop < windowHeight - 50) {
          item.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // run once on load
  });
  
