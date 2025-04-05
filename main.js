// Menu data
const menuData = {
    shots: [
        {
            name: 'Hiroshima (Chuk Norris)',
            description: 'Halvt glass med Battery, 2 cl Sambuca, 2 cl Jägermeister'
        },
        {
            name: 'Hot Shot',
            description: '2 cl Galliano, 2 cl kaffe, toppes med krem'
        },
        {
            name: 'B52',
            description: '2 cl Kahlua, 2 cl Baileys, toppes med krem'
        },
        {
            name: 'Blowjob',
            description: '2 cl Amarula, 2 cl Baileys, toppes med krem'
        },
        {
            name: 'Brainstorm',
            description: '2 cl Peachtree, med skje 2 cl Baileys, dråpe med grenadin'
        },
        {
            name: 'Snippelnippel',
            description: '2 cl Sambuca, med skje 2 cl Baileys'
        },
        {
            name: 'Black Russian',
            description: '2 cl vodka, 2 cl Kahlua (shakes)'
        },
        {
            name: 'White Russian',
            description: '2 cl vodka, 2 cl Kahlua, litt krem (shakes)'
        },
        {
            name: 'Flatliner',
            description: '2 cl Sambuca, 2 cl tequila, dråpe med Tabasco'
        },
        {
            name: 'Kamikaze',
            description: '2 cl vodka, 2 cl Apple Sour, lime saft (shakes)'
        },
        {
            name: 'Gas Shots',
            description: '2 cl Sambuca, 1 cl Galliano, 1 cl Amaretto (rekkefølge)'
        },
        {
            name: 'Rena Shot',
            description: '1 cl Tequila, 1 cl Captain Morgan, 1 cl Gin'
        }
    ],
    cocktails: [
        {
            name: 'Lennart',
            description: 'Knust 2 limebiter, is, 2 cl Xanté, 2 cl vodka, toppes med Sprite'
        },
        {
            name: 'Sureføtter',
            description: '2 cl Jägermeister, 2 cl Peachtree, sour mix (shakes), toppes med Sprite'
        },
        {
            name: 'Lynchburg Lemonade',
            description: '3 cl Jack, 1 cl Triple Sec, sitron- og lime sourmix, toppes med Sprite'
        },
        {
            name: 'Cuba Libre',
            description: '4 cl rom, lime skiver, toppes med Cola'
        },
        {
            name: 'Tequila Sunrise',
            description: '4 cl tequila, appelsinjuice, dråpe med grenadin'
        },
        {
            name: 'Suresivert',
            description: '2 cl vodka, 2 cl Pisang, litt krem, sour mix (shakes), toppes med Sprite'
        },
        {
            name: 'Daiquiri',
            description: '4 cl vodka, rose lime, 1 pose sukker, is (blendes) - Velg mellom: Jordbær, Mango, Banan, Grenadin'
        },
        {
            name: 'San Francisco',
            description: '3 cl vodka, 1 cl bananlikør, appelsinjuice (shakes), dråpe med grenadin'
        },
        {
            name: 'Sex on the Beach',
            description: '2 cl vodka, 2 cl Peachtree, appelsinjuice, dråpe med grenadin'
        },
        {
            name: 'Fjellbekk',
            description: '2 cl vodka, 2 cl aquavit, dråpe med rose lime, toppes med Sprite'
        },
        {
            name: 'Isbjørn',
            description: '2 cl vodka, 2 cl blå curacao, toppes med Sprite'
        },
        {
            name: 'Moscow Mule',
            description: '2 cl vodka, limejuice, toppes med ingefærøl'
        },
        {
            name: 'Caipirinha',
            description: 'Limebiter og sukker knuses, is og 2 cl rom tilsettes'
        },
        {
            name: 'Blue Lagoon',
            description: '2 cl vodka, 2 cl blå curacao, sitron og Sprite'
        },
        {
            name: 'Diablo',
            description: '4 cl tequila, krem, sitronjuice, ingefærøl'
        },
        {
            name: 'Bråten Spesial',
            description: '1 cl Campari, 1 cl whisky, 1 cl Cointreau, toppes med soda'
        },
        {
            name: 'Margarita',
            description: '2 cl tequila, 2 cl Triple Sec, lime skive, saltet glass, is'
        },
        {
            name: 'Godfather',
            description: '2 cl whisky, Sprite, 2 cl Amaretto'
        },
        {
            name: 'Tom Collins',
            description: '4 cl gin, sitronsaft, toppes med Sprite og tonic'
        }
    ]
};

// Create scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.transform = `scaleX(${scrolled / 100})`;
    });
};

// Mobile menu toggle
const initMobileMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
};

// Populate menu sections with animation
function populateMenu() {
    const shotsContainer = document.getElementById('shots-menu');
    const cocktailsContainer = document.getElementById('cocktails-menu');

    menuData.shots.forEach((item, index) => {
        const menuItem = createMenuItem(item);
        menuItem.style.animationDelay = `${index * 0.1}s`;
        shotsContainer.appendChild(menuItem);
    });

    menuData.cocktails.forEach((item, index) => {
        const menuItem = createMenuItem(item);
        menuItem.style.animationDelay = `${index * 0.1}s`;
        cocktailsContainer.appendChild(menuItem);
    });
}

function createMenuItem(item) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
        <h4>${item.name}</h4>
        <p>${item.description}</p>
    `;
    return div;
}

// Enhanced smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
function observeElements() {
    document.querySelectorAll('.menu-item, .contact-item, .gallery-item').forEach(element => {
        observer.observe(element);
    });
}

// Parallax effect for hero section
function parallaxEffect() {
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
}

// Enhanced navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > scrollThreshold && !document.querySelector('.nav-links.active')) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    if (currentScroll === 0) {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    createScrollProgress();
    populateMenu();
    observeElements();
    parallaxEffect();
    initMobileMenu();
});