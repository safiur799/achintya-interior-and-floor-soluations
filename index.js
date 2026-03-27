document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Percentage Loader ---
    const loader = document.getElementById('loader');
    const percentSpan = document.getElementById('percent');
    let count = 0;

    const interval = setInterval(() => {
        count += Math.floor(Math.random() * 15) + 1;
        if (count >= 100) {
            count = 100;
            clearInterval(interval);
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.transform = 'translateY(-100%)';
                setTimeout(() => loader.style.display = 'none', 1000);
                startHeroAnimations();
            }, 500);
        }
        percentSpan.textContent = count < 10 ? `0${count}` : count;
    }, 80);

    // --- 2. Hero Slider (Swiper) ---
    const swiper = new Swiper('.hero-slider', {
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        effect: 'fade',
        fadeEffect: { crossFade: true }
    });

    function startHeroAnimations() {
        gsap.to('.hero-content h1', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.3,
            ease: 'power4.out'
        });
    }

    // --- 3. Sticky Header ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 4. GSAP ScrollTrigger Animations ---
    gsap.registerPlugin(ScrollTrigger);

    // Text Fill Animation
    const textFills = document.querySelectorAll('.text-fill');
    textFills.forEach(text => {
        gsap.to(text, {
            backgroundSize: '100% 100%',
            ease: 'none',
            scrollTrigger: {
                trigger: text,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 1,
            }
        });
    });

    // Reveal Up Animation
    const revealUps = document.querySelectorAll('.reveal-up');
    revealUps.forEach(el => {
        gsap.from(el, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 90%',
            }
        });
    });

    // Reveal Left/Right for Map
    gsap.from('.reveal-right', {
        x: -100, opacity: 0, duration: 1.2, scrollTrigger: { trigger: '.map-section', start: 'top 80%' }
    });
    gsap.from('.reveal-left', {
        x: 100, opacity: 0, duration: 1.2, scrollTrigger: { trigger: '.map-section', start: 'top 80%' }
    });

    // --- 5. Navigation Overlay & GSAP Stagger ---
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const navOverlay = document.getElementById('navOverlay');
    const menuItems = document.querySelectorAll('.menu-item');
    const overlayFooter = document.querySelectorAll('.overlay-footer > *');

    const openMenu = () => {
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // GSAP Staggered Entry
        gsap.fromTo(menuItems,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.3 }
        );

        gsap.fromTo(overlayFooter,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.7 }
        );
    };

    const closeMenu = () => {
        navOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    // Close menu when link is clicked
    document.querySelectorAll('.main-menu a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // --- 6. Form Submission Simulation ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.submit-btn');
            btn.textContent = 'PROCEEDING...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Your request has been sent to Achintya Interior and Floor Solutions.');
                contactForm.reset();
                btn.textContent = 'PROCEED';
                btn.disabled = false;
            }, 1500);
        });
    }
});
