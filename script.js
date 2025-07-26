// Animação de background das fotos dos profissionais no botão
document.addEventListener('DOMContentLoaded', function() {
    const professionalsImages = [
        'emmanuelcasagrande.jpg',
        'guilhermecasagrande.jpg',
        'amandaagonilha.jpg',
        'andressauhdre.jpg',
        'nataliadeoliveira.jpg'
    ];
    const btns = document.querySelectorAll('.btn-professionals');
    btns.forEach(btn => {
        // Remove camadas antigas
        btn.querySelectorAll('.professionals-bg-anim').forEach(el => el.remove());
        // Cria camadas para cada imagem
        professionalsImages.forEach((img, idx) => {
            const div = document.createElement('div');
            div.className = 'professionals-bg-anim';
            div.style.backgroundImage = `url('${img}')`;
            if (idx === 0) div.classList.add('active');
            btn.appendChild(div);
        });
        const layers = Array.from(btn.querySelectorAll('.professionals-bg-anim'));
        let current = 0;
        layers[current].style.opacity = '1';
        setInterval(() => {
            layers[current].style.opacity = '0';
            layers[current].classList.remove('active');
            current = (current + 1) % layers.length;
            layers[current].style.opacity = '1';
            layers[current].classList.add('active');
        }, 5000);
    });
});
// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    const professionalsHero = document.querySelector('.professionals-hero');
    
    // Header scroll effect
    function handleScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Simple opacity alternating system
    function alternateOpacity() {
        if (hero) {
            const layer1 = hero.querySelector('.hero-layer-1');
            const layer2 = hero.querySelector('.hero-layer-2');
            
            if (layer1 && layer2) {
                // Toggle opacity between layers
                if (layer1.style.opacity === '0') {
                    layer1.style.opacity = '1';
                    layer2.style.opacity = '0';
                } else {
                    layer1.style.opacity = '0';
                    layer2.style.opacity = '1';
                }
            }
        }
        
        if (professionalsHero) {
            const layer1 = professionalsHero.querySelector('.professionals-layer-1');
            const layer2 = professionalsHero.querySelector('.professionals-layer-2');
            
            if (layer1 && layer2) {
                // Toggle opacity between layers
                if (layer1.style.opacity === '0') {
                    layer1.style.opacity = '1';
                    layer2.style.opacity = '0';
                } else {
                    layer1.style.opacity = '0';
                    layer2.style.opacity = '1';
                }
            }
        }
    }
    
    // Start alternating every 10 seconds
    setInterval(alternateOpacity, 10000);
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements and observe them
    const elementsToAnimate = document.querySelectorAll('.service-card, .about-content, .contact-content');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);

const professionalsImages = [
  'emmanuelcasagrande.jpg',
  'guilhermecasagrande.jpg',
  'nataliadeoliveira.jpg',
  'amandaagonilha.jpg',
  'andressauhdre.jpg'
];

function setupProfessionalsBackground() {
  const container = document.querySelector('.professionals-button-container');


  // Remove any previous animated backgrounds
  container.querySelectorAll('.professionals-bg-anim').forEach(el => el.remove());

  // Create layers for each image
  professionalsImages.forEach((img, idx) => {
    const div = document.createElement('div');
    div.className = 'professionals-bg-anim';
    div.style.backgroundImage = `url('${img}')`;
    div.style.zIndex = '1';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.opacity = '0';
    div.style.transition = 'opacity 1s ease';
    if (idx === 0) div.classList.add('active');
    container.appendChild(div);
  });

  // Garante que o conteúdo do botão fique acima das imagens
  const btns = container.querySelectorAll('.btn-professionals');
  btns.forEach(btn => {
    btn.style.position = 'relative';
    btn.style.zIndex = '2';
  });

  const layers = Array.from(container.querySelectorAll('.professionals-bg-anim'));
  let current = 0;

  // Ativa a primeira imagem
  layers[current].style.opacity = '1';

  setInterval(() => {
    layers[current].style.opacity = '0';
    layers[current].classList.remove('active');
    current = (current + 1) % layers.length;
    layers[current].style.opacity = '1';
    layers[current].classList.add('active');
  }, 5000);
}

// Fim do arquivo, todos os blocos fechados corretamente
}

// Add slide-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Add click-to-call functionality for mobile
document.addEventListener('DOMContentLoaded', function() {
    const phoneNumbers = document.querySelectorAll('.contact-item p');
    phoneNumbers.forEach(element => {
        const text = element.textContent;
        if (text.includes('(11)')) {
            const phoneNumber = text.replace(/\D/g, '');
            if (phoneNumber.length >= 10) {
                element.innerHTML = text.replace(/\(11\) \d{4,5}-\d{4}/g, 
                    `<a href="tel:+55${phoneNumber}" style="color: inherit; text-decoration: none;">$&</a>`);
            }
        }
    });
});

// Add email click functionality
document.addEventListener('DOMContentLoaded', function() {
    const emailElements = document.querySelectorAll('.contact-item p, .footer-section p');
    emailElements.forEach(element => {
        const text = element.textContent;
        if (text.includes('@')) {
            const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
            if (emailMatch) {
                const email = emailMatch[0];
                element.innerHTML = text.replace(email, 
                    `<a href="mailto:${email}" style="color: inherit; text-decoration: none;">${email}</a>`);
            }
        }
    });
});

// Statistics counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/\D/g, ''));
                let current = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target + (counter.textContent.includes('%') ? '%' : '+');
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current) + (counter.textContent.includes('%') ? '%' : '+');
                    }
                }, 20);
                observer.unobserve(counter);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
}

// Initialize counter animation
document.addEventListener('DOMContentLoaded', animateCounters);

// WhatsApp Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.getElementById('whatsappButton');
    
    whatsappButton.addEventListener('click', function() {
        const phoneNumber = '5543999999999'; // Número com código do país (Brasil: 55)
        const message = 'Olá! Gostaria de mais informações sobre os serviços jurídicos.';
        const encodedMessage = encodeURIComponent(message);
        
        // URL para WhatsApp Web/App
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Abrir em uma nova aba
        window.open(whatsappURL, '_blank');
    });
    
    // Adicionar efeito de clique
    whatsappButton.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    whatsappButton.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    whatsappButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
// ...existing code...
