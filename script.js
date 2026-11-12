// Animation d'apparition au chargement
document.addEventListener("DOMContentLoaded", () => {

    const elements = [
        document.querySelector(".welcome"),
        document.querySelector(".hero h1"),
        document.querySelector(".hero h2"),
        document.querySelector(".description"),
        document.querySelector(".buttons"),
        document.querySelector(".hero-image")
    ];

    elements.forEach((element, index) => {

        if (element) {
            element.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(40px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ],
                {
                    duration: 1000,
                    delay: index * 200,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );
        }

    });

});

// Animation du visuel
const profile = document.querySelector(".profile-placeholder");

if (profile) {
    profile.animate(
        [
            { transform: "translateY(0)" },
            { transform: "translateY(-15px)" },
            { transform: "translateY(0)" }
        ],
        {
            duration: 3000,
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
}

// MENU RESPONSIVE

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Fermer le menu après un clic sur un lien
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// BOUTON RETOUR EN HAUT

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});