// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.style.background = window.scrollY > 50 ? '#081b29' : 'transparent';
    header.style.boxShadow = window.scrollY > 50 ? '0 2px 20px rgba(0,238,255,0.1)' : 'none';
    header.style.transition = '0.3s';
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#0ef';
        }
    });
});

// Contact form submit handler
const form = document.getElementById("contactForm");


form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const btn = form.querySelector("button");
    btn.textContent = "Sending...";

    const formData = new FormData(form);

    try {
        const response = await fetch("https://formspree.io/f/mlgawqap", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            btn.textContent = "Message Sent!";
            form.reset();
        } else {
            btn.textContent = "Error! Try again";
        }
    } catch (error) {
        btn.textContent = "Failed!";
    }

    setTimeout(() => {
        btn.textContent = "Send Message";
    }, 3000);
});