// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const projectModal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');
const projectButtons = document.querySelectorAll('.project-btn');

// Project data for modal
const projectData = {
    'web-demo': {
        title: 'Web Design Demo',
        description: 'A modern, responsive web interface designed for industrial monitoring and control systems. This project showcases advanced frontend development techniques with a focus on user experience and real-time data visualization.',
        features: [
            'Responsive design for all devices',
            'Real-time data visualization',
            'Interactive control panels',
            'Modern UI/UX design',
            'Cross-browser compatibility'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'Bootstrap'],
        image: 'fas fa-globe',
        link: '#'
    },
    'ignition': {
        title: 'Ignition SCADA System',
        description: 'Comprehensive SCADA solution for real-time monitoring and control of industrial processes. This system provides centralized control, data logging, and alarm management for complex manufacturing operations.',
        features: [
            'Real-time process monitoring',
            'Historical data logging',
            'Alarm management system',
            'User authentication & roles',
            'Mobile-responsive interface'
        ],
        technologies: ['Ignition', 'SQL Database', 'OPC UA', 'Python Scripts', 'Vision Module'],
        image: 'fas fa-fire',
        link: '#'
    },
    'plc': {
        title: 'PLC Control System',
        description: 'Advanced PLC programming for automated manufacturing line with comprehensive safety interlocks. This system ensures reliable operation while maintaining the highest safety standards.',
        features: [
            'Automated production control',
            'Safety interlock systems',
            'Fault detection & recovery',
            'Production line optimization',
            'Maintenance scheduling'
        ],
        technologies: ['Allen-Bradley PLC', 'Ladder Logic', 'Safety Systems', 'HMI Interface', 'Ethernet/IP'],
        image: 'fas fa-microchip',
        link: '#'
    },
    'python': {
        title: 'Python Automation Scripts',
        description: 'Collection of automation scripts for data collection, analysis, and system integration. These scripts streamline operations and provide valuable insights through automated data processing.',
        features: [
            'Automated data collection',
            'Statistical analysis',
            'Report generation',
            'System integration',
            'Error handling & logging'
        ],
        technologies: ['Python', 'Pandas', 'NumPy', 'SQLAlchemy', 'REST APIs'],
        image: 'fab fa-python',
        link: '#'
    },
    'ai-platform': {
        title: 'AImpact4SmallBiz Platform',
        description: 'AI-powered automation platform designed for small businesses to streamline operations through intelligent process automation, real-time monitoring, and comprehensive business insights.',
        features: [
            'AI-generated process logic',
            'End-to-end automation workflow',
            'Real-time monitoring dashboard',
            'Intelligent business insights',
            'Scalable deployment options',
            'User-friendly interface'
        ],
        technologies: ['AI/ML', 'Web Technologies', 'Process Automation', 'Data Analytics', 'Cloud Platform'],
        image: 'fas fa-brain',
        link: '../AIForSmallBiz/index.html'
    }
};

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Navigation
function initNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'var(--nav-bg)';
            navbar.style.boxShadow = '0 2px 20px var(--shadow)';
        } else {
            navbar.style.background = 'var(--nav-bg)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Form Validation and Submission
function initContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();
        
        // Validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Sending message...', 'info');
        
        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.reset();
        }, 2000);
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--card-bg);
        border: 1px solid var(--border);
        border-radius: 0.5rem;
        padding: 1rem;
        box-shadow: 0 10px 25px var(--shadow);
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add type-specific styling
    if (type === 'success') {
        notification.style.borderLeft = '4px solid #10b981';
    } else if (type === 'error') {
        notification.style.borderLeft = '4px solid #ef4444';
    } else {
        notification.style.borderLeft = '4px solid var(--primary-color)';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Project Modal
function initProjectModal() {
    // Open modal
    projectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const projectCard = button.closest('.project-card');
            const projectId = projectCard.dataset.project;
            openProjectModal(projectId);
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', closeProjectModal);
    
    // Close modal when clicking outside
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.style.display === 'block') {
            closeProjectModal();
        }
    });
}

function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-icon">
                <i class="${project.image}"></i>
            </div>
            <h2>${project.title}</h2>
        </div>
        <div class="modal-body">
            <p class="modal-description">${project.description}</p>
            
            <div class="modal-section">
                <h3>Key Features</h3>
                <ul class="feature-list">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3>Technologies Used</h3>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-actions">
                <a href="${project.link}" class="btn btn-primary" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                    View Project
                </a>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .modal-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--border);
        }
        
        .modal-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
        }
        
        .modal-header h2 {
            margin: 0;
            color: var(--text-primary);
        }
        
        .modal-description {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 2rem;
        }
        
        .modal-section {
            margin-bottom: 2rem;
        }
        
        .modal-section h3 {
            color: var(--text-primary);
            margin-bottom: 1rem;
            font-size: 1.25rem;
        }
        
        .feature-list {
            list-style: none;
            padding: 0;
        }
        
        .feature-list li {
            padding: 0.5rem 0;
            color: var(--text-secondary);
            position: relative;
            padding-left: 1.5rem;
        }
        
        .feature-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--primary-color);
            font-weight: bold;
        }
        
        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        
        .modal-actions {
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid var(--border);
        }
    `;
    
    document.head.appendChild(style);
    
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.experience-card, .project-card, .tech-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Add animation styles
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .experience-card,
    .project-card,
    .tech-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .experience-card.animate-in,
    .project-card.animate-in,
    .tech-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .tech-item:nth-child(1) { transition-delay: 0.1s; }
    .tech-item:nth-child(2) { transition-delay: 0.2s; }
    .tech-item:nth-child(3) { transition-delay: 0.3s; }
    .tech-item:nth-child(4) { transition-delay: 0.4s; }
`;
document.head.appendChild(animationStyles);

// Resume Download
function initResumeDownload() {
    const downloadBtn = document.querySelector('.download-btn');
    downloadBtn.addEventListener('click', () => {
        showNotification('Resume download started!', 'success');
    });
}

// Social Links
function initSocialLinks() {
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('Social media links will be updated soon!', 'info');
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initNavigation();
    initNavbarScroll();
    initContactForm();
    initProjectModal();
    initScrollAnimations();
    initResumeDownload();
    initSocialLinks();
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', toggleTheme);
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyles = document.createElement('style');
loadingStyles.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyles); 