/**
 * SMAJ Ecosystem - Navigation JavaScript
 * Production-ready mobile menu implementation
 */

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initHeaderScroll();
    initActiveNavigation();
});

/**
 * Mobile Menu Handler
 * Manages toggle, overlay interaction, body scroll lock, and animations
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.btn-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const body = document.body;

    if (!menuToggle || !mobileMenu || !mobileOverlay) return;

    /**
     * Close the mobile menu
     */
    const closeMenu = () => {
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';

        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');

        // Unlock body scroll
        body.classList.remove('no-scroll');
    };

    /**
     * Open the mobile menu
     */
    const openMenu = () => {
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.textContent = '✖';

        mobileMenu.classList.add('active');
        mobileOverlay.classList.add('active');

        // Lock body scroll
        body.classList.add('no-scroll');
    };

    /**
     * Toggle menu on hamburger click
     */
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (mobileMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    /**
     * Close menu on overlay click
     */
    mobileOverlay.addEventListener('click', (e) => {
        e.stopPropagation();
        closeMenu();
    });

    /**
     * Close menu on link click
     */
    mobileLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            // Allow page navigation to complete
            setTimeout(closeMenu, 100);
        });
    });

    /**
     * Close menu on escape key
     */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    /**
     * Handle window resize - close menu on desktop
     */
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992 && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    /**
     * Prevent menu from closing when clicking inside menu
     */
    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

/**
 * Header Scroll Effects
 * Adds scrolled class and manages header appearance on scroll
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Active Navigation Link Indicator
 * Highlights current page in navigation
 */
function initActiveNavigation() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    // Update desktop nav
    const desktopLinks = document.querySelectorAll('.nav-desktop .nav-link');
    desktopLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Update mobile nav
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
