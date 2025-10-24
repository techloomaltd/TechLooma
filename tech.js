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
  document.addEventListener("DOMContentLoaded", () => {
    const chatBtn = document.getElementById("chat-btn");
    const chatBox = document.getElementById("chat-box");
    const closeChat = document.querySelector(".close-chat");
    const sendBtn = document.getElementById("send-btn");
    const chatInput = document.getElementById("chat-input");
    const chatBody = document.getElementById("chat-body");
  
    chatBtn.addEventListener("click", () => {
      chatBox.style.display =
        chatBox.style.display === "flex" ? "none" : "flex";
      chatBox.style.flexDirection = "column";
    });
  
    closeChat.addEventListener("click", () => {
      chatBox.style.display = "none";
    });
  
    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendMessage();
    });
  
    function sendMessage() {
      const message = chatInput.value.trim();
      if (message !== "") {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("message", "user");
        msgDiv.textContent = message;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        chatInput.value = "";
  
        // ✅ Correct WhatsApp number (no +)
        const phoneNumber = "254795828952";
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
        // ✅ Open WhatsApp
        window.open(whatsappURL, "_blank");
      }
    }
  });
  

