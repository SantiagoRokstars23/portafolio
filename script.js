// Scroll suave
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// Animación al hacer scroll
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));


/*
const projects = {
    1: {
        title: "Sistema de Transferencias Bancarias",
        description: "Sistema backend basado en microservicios para transferencias entre cuentas.",
        features: [
            "Validación de saldo en tiempo real",
            "Manejo de errores transaccionales",
            "Arquitectura limpia"
        ],
        tech: ["Java", "Spring Boot", "PostgreSQL"]
    },
    2: {
        title: "Sistema Veterinario",
        description: "Backend para gestión de citas y usuarios.",
        features: [
            "Gestión de usuarios",
            "Sistema de citas",
            "Arquitectura escalable"
        ],
        tech: ["Java", "Spring Boot"]
    },
    3: {
        title: "Proyecto con IA",
        description: "Integración de inteligencia artificial para automatización.",
        features: [
            "Clasificación de datos",
            "Automatización de procesos"
        ],
        tech: ["IA", "Claude"]
    }
};

function openProject(id) {
    const project = projects[id];

    document.getElementById("detail-title").innerText = project.title;
    document.getElementById("detail-description").innerText = project.description;

    const featuresList = document.getElementById("detail-features");
    featuresList.innerHTML = "";
    project.features.forEach(f => {
        featuresList.innerHTML += `<li>✔ ${f}</li>`;
    });

    const techDiv = document.getElementById("detail-tech");
    techDiv.innerHTML = "";
    project.tech.forEach(t => {
        techDiv.innerHTML += `<span>${t}</span>`;
    });

    document.getElementById("project-detail").classList.remove("hidden");
}

function closeProject() {
    document.getElementById("project-detail").classList.add("hidden");
}

*/
/**------------------------------ */


const projects = {
    1: {
        title: "Sistema de Transferencias Bancarias",
        description: "Sistema backend basado en microservicios para transferencias entre cuentas.",
        features: [
            "Validación de saldo en tiempo real",
            "Manejo de errores transaccionales",
            "Arquitectura limpia"
        ],
        tech: ["Java", "Spring Boot", "PostgreSQL"],
        img: "https://velog.velcdn.com/images/hunzz/post/7a7ee5dc-dc99-48d8-ae9c-22d64f04e587/image.webp",
        github: "#",
        api: "#"
    },
    2: {
        title: "Sistema Veterinario",
        description: "Gestión de citas y usuarios.",
        features: [
            "Sistema de citas",
            "Gestión de usuarios"
        ],
        tech: ["Java", "Spring Boot"],
        img: "https://velog.velcdn.com/images/hunzz/post/7a7ee5dc-dc99-48d8-ae9c-22d64f04e587/image.webp",
        github: "https://github.com/AndresCarvajal10/proyectoIntegradorBackendd/tree/master",
        api: "#"
    },
    3: {
        title: "Proyecto con IA",
        description: "Automatización con inteligencia artificial.",
        features: [
            "Clasificación de datos",
            "Automatización de procesos"
        ],
        tech: ["IA", "Claude"],
        img: "https://www.dignited.com/wp-content/uploads/2023/07/CLAUDEAI-1536x864.jpg",
        github: "https://github.com/SantiagoRokstars23/Curso_claude",
        api: "#"
    }
};

function openProject(id) {
    const p = projects[id];

    document.getElementById("modal-title").innerText = p.title;
    document.getElementById("modal-description").innerText = p.description;

    const features = document.getElementById("modal-features");
    features.innerHTML = "";
    p.features.forEach(f => {
        features.innerHTML += `<li>✔ ${f}</li>`;
    });

    const tech = document.getElementById("modal-tech");
    tech.innerHTML = "";
    p.tech.forEach(t => {
        tech.innerHTML += `<span>${t}</span>`;
    });

    document.getElementById("modal-img").src = p.img;
    document.getElementById("modal-github").href = p.github;
    document.getElementById("modal-api").href = p.api;

    document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}