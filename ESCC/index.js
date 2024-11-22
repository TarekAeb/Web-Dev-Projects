document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        duration: 1.2,
        once: true
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
});
const navToggle = document.getElementById('navToggle');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

function toggleNav() {
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}
gasp.to("#heroImg", { opacity: 1, delay: 0.5, duration: 1 });
gsap.to("#heroBg", { y: 0, opacity: 1, delay: 0.4 });
gsap.to("#logo", { opacity: 1, delay: 1, scrollTrigger: { trigger: "#logo", start: "top center", end: "bottom center", toggleActions: "play none none none" } });
gsap.to("#heroText", { y: 0, opacity: 1, delay: 2 });


// Departement Section
gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 })

const animation = gsap.to(".photo:not(:first-child)", {
    opacity: 1, scale: 1, duration: 1, stagger: 1
})

ScrollTrigger.create({
    trigger: ".departements",
    start: "top top",
    end: "bottom bottom",
    pin: ".",
    animation: animation,
    scrub: true,
    markers: true
})