window.addEventListener("scroll", scrollHeader);
window.addEventListener("scroll", scrollUp);

function scrollHeader() {
    const header = document.getElementById("header");

    if (window.scrollY >= 50) {
        header.classList.add("scroll-header")
    } else {
        header.classList.remove("scroll-header")
    }
}

function scrollUp() {
    const scrollElement = document.getElementById("scroll-up");

    if (window.scrollY >= 350) {
        scrollElement.classList.add("show-scroll")
    } else {
        scrollElement.classList.remove("show-scroll")
    }
}

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link")
        } else {
            sectionsClass.classList.remove("active-link")
        }
    })
}

window.addEventListener("scroll", scrollActive);

const scroll = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
})

scroll.reveal(".home__data, .products__data, .steps__content, .footer__container");
scroll.reveal(".home__img", {origin: "bottom"});
scroll.reveal(".products__card", {interval: 100});
scroll.reveal(".about__img, .testimonial__img", {origin: "right"});
scroll.reveal(".about__data, .testimonial__data", {origin: "left"});