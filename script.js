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

// LANGUE FR / EN

const translations = {
    en: {
        // Titres des onglets
        title_home: "Marie Esther | Web Developer",
        title_about: "About | Marie Esther",
        title_skills: "Skills | Marie Esther",
        title_projects: "Projects | Marie Esther",
        title_contact: "Contact | Marie Esther",

        // Menu
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",

        // Accueil
        welcome: "WELCOME TO MY PORTFOLIO",
        hero_title: "Hello, I'm<br><span>Marie Esther</span>",
        hero_sub: "Aspiring Web Developer",
        hero_desc: "Computer systems and software student at HECM. I build modern, elegant and interactive web experiences.",
        btn_projects: "Discover my projects",
        btn_contact: "Contact me",

        sum_label: "DISCOVER",
        sum_title: "My world at a glance",
        sum1_text: "I am a second-year student in the Bachelor's degree in Computer Systems and Software at HECM, in Cotonou. Passionate about web development and artificial intelligence, I learn by building real projects.",
        sum1_link: "Get to know me →",
        sum2_text: "HTML, CSS, JavaScript, Vue.js and Nuxt, Python and TensorFlow: I build my technical skills every day. I also bring content creation, teamwork and organization.",
        sum2_link: "See my skills →",
        sum3_text: "Soutenance+, a platform to prepare thesis defenses, Face AI, an artificial intelligence application that analyzes an image, this portfolio, and many more: every project I build during my studies teaches me something new.",
        sum3_link: "See my projects →",
        sum4_text: "I am looking for opportunities, especially an internship. Have a project or just want to chat? Write to me, I will gladly reply.",
        sum4_link: "Contact me →",

        // Bandes de mots
        mq_web: "WEB DEVELOPMENT",
        mq_ai: "ARTIFICIAL INTELLIGENCE",
        mq2_learn: "LEARNING BY BUILDING",
        mq2_clarity: "CLARITY BEFORE COMPLEXITY",
        mq2_detail: "ATTENTION TO DETAIL",
        mq2_creativity: "CREATIVITY",
        mq2_rigor: "RIGOR",

        // Footer
        foot_tag: "Aspiring Web Developer | Marie Esther",
        foot_copy: "© 2026 Marie Esther. All rights reserved.",

        // Page À propos
        about_label: "ABOUT ME",
        about_h2: "Who am I?",
        about_p1: "I am Marie Esther, a second-year student in the Bachelor's degree in Computer Systems and Software at HECM, based in Cotonou, Benin.",
        about_p2: "I am passionate about web development and artificial intelligence. I build my skills by working on real projects: Soutenance+, a platform that helps students prepare and submit their thesis presentation, and Face AI, an application that estimates apparent age and gender from an image.",
        about_p3: "I am looking for opportunities, especially an internship, to put my skills into practice, learn from a team and contribute to projects that meet users' needs.",
        info_education: "Education",
        info_education_val: "Bachelor's in computer science",
        info_school: "School",
        info_specialty: "Specialty",
        info_specialty_val: "Web Development",
        values_title: "How I work",
        val1_title: "Clarity before complexity",
        val1_text: "I start from a simple need and keep my code readable.",
        val2_title: "Learning by building",
        val2_text: "Every project helps me progress on a new tool.",
        val3_title: "Attention to detail",
        val3_text: "A website should be beautiful, but also pleasant to use.",

        // Page Compétences
        skills_label: "MY SKILLS",
        skills_h2: "What I can do",
        skills_desc: "I develop my technical skills to build modern websites.",
        sk_html: "Web page structure",
        sk_css: "Design and layout",
        sk_js: "Interactions and animations",
        sk_git: "Project management",
        sk_word: "Word processing",
        sk_excel: "Spreadsheets and calculations",
        sk_vue: "Modern web applications",
        sk_python: "Programming and data processing",
        sk_tf: "Artificial intelligence",
        sk_tailwind: "Fast, modern design",
        other_title: "Other areas",
        other_desc: "Beyond code, here is what I also bring.",
        oth_content: "Content creation",
        oth_content_text: "Short videos for social media, made with artificial intelligence tools.",
        oth_lang: "Languages",
        oth_lang_fr: "French: main language",
        oth_lang_en: "English: improving",
        oth_soft: "Soft skills",
        oth_team: "Teamwork",
        oth_org: "Organization",
        oth_rigor: "Rigor",

        // Page Projets
        proj_label: "MY WORK",
        proj_h2: "My recent projects",
        proj_desc: "Discover some of the projects I work on as part of my learning.",
        proj1_text: "A web platform that lets students submit their thesis presentations and thesis supervisors review them.",
        proj2_text: "An artificial intelligence application that estimates apparent age and gender from an image.",
        proj3_title: "Personal website",
        proj3_text: "A modern portfolio built to showcase my skills, my academic background and my work.",
        proj_link: "View code on GitHub →",
        proj_link_old: "Discover the project →",

        // Page Contact
        contact_h2: "Let's work together",
        contact_desc: "Have a project, an internship opportunity, or just want to chat? Feel free to contact me.",
        contact_location: "Location",
        contact_city: "Cotonou, Benin",
        contact_github: "My computing projects",
        ph_name: "Your name",
        ph_email: "Your email address",
        ph_subject: "Subject",
        ph_message: "Your message...",
        btn_send: "Send message"
    }
};

// SÉLECTEUR DE LANGUE : FR | EN

const oldToggle = document.getElementById("langToggle");

if (oldToggle) {
    oldToggle.parentElement.innerHTML =
        '<div class="lang-switch">' +
            '<button type="button" class="lang-btn" data-lang="fr">FR</button>' +
            '<span class="lang-sep">|</span>' +
            '<button type="button" class="lang-btn" data-lang="en">EN</button>' +
        '</div>';
}

let currentLang = "fr";

try {
    currentLang = localStorage.getItem("lang") || "fr";
} catch (e) {}

function applyLang(lang) {

    // Textes
    document.querySelectorAll("[data-i18n]").forEach(el => {
        if (el.dataset.fr === undefined) {
            el.dataset.fr = el.innerHTML;
        }

        const key = el.dataset.i18n;

        if (lang === "en" && translations.en[key]) {
            el.innerHTML = translations.en[key];
        } else {
            el.innerHTML = el.dataset.fr;
        }
    });

    // Champs du formulaire
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        if (el.dataset.frPlaceholder === undefined) {
            el.dataset.frPlaceholder = el.getAttribute("placeholder");
        }

        const key = el.dataset.i18nPlaceholder;

        if (lang === "en" && translations.en[key]) {
            el.setAttribute("placeholder", translations.en[key]);
        } else {
            el.setAttribute("placeholder", el.dataset.frPlaceholder);
        }
    });

    document.documentElement.lang = lang;

    // Mettre en couleur la langue active
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    try {
        localStorage.setItem("lang", lang);
    } catch (e) {}

    currentLang = lang;
}

document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        applyLang(btn.dataset.lang);
    });
});

applyLang(currentLang);


// ICÔNES DES RÉSEAUX SOCIAUX

const iconStyles = document.createElement("link");
iconStyles.rel = "stylesheet";
iconStyles.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
document.head.appendChild(iconStyles);

const socialIcons = {
    "github.com": "fa-github",
    "linkedin.com": "fa-linkedin-in",
    "wa.me": "fa-whatsapp",
    "facebook.com": "fa-facebook-f"
};

document.querySelectorAll(".social-links a").forEach(link => {
    const host = new URL(link.href).hostname.replace("www.", "");
    const icon = socialIcons[host];

    if (icon) {
        const name = link.textContent.trim();
        link.setAttribute("aria-label", name);
        link.setAttribute("title", name);
        link.innerHTML = '<i class="fa-brands ' + icon + '"></i>';
        link.classList.add("social-icon");
    }
});