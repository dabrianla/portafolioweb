// =======================================
// THEME MODAL
// =======================================

function openModal() {
    const modal = document.getElementById("themeModal");
    if (modal) modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("themeModal");
    if (modal) modal.style.display = "none";
}

// =======================================
// BACKGROUND SELECTOR
// =======================================

document.querySelectorAll(".bg-preview").forEach(bg => {
    bg.style.backgroundImage = `url('/static/img/${bg.dataset.bg}')`;

    bg.addEventListener("click", () => {
        document.body.style.background =
            `url('/static/img/${bg.dataset.bg}') center/cover fixed`;
        localStorage.setItem("selectedBg", bg.dataset.bg);
    });
});

// =======================================
// COLOR SELECTOR
// =======================================

const colors = {
    ruby: "#e3161c",
    lapis: "#0b8dc0",
    gold: "#d4af37",
    silver: "#8e9eab"
};

document.querySelectorAll(".color").forEach(c => {
    c.addEventListener("click", () => {
        const selected = colors[c.dataset.color];
        if (selected) {
            document.documentElement.style.setProperty("--primary", selected);
            localStorage.setItem("selectedColor", c.dataset.color);
        }
    });
});

// =======================================
// CONTACT OVERLAY
// =======================================

function openContact() {
    const overlay = document.getElementById("contactOverlay");
    if (overlay) overlay.classList.add("active");
}

const contactOverlay = document.getElementById("contactOverlay");

if (contactOverlay) {
    contactOverlay.addEventListener("click", function (e) {
        if (e.target === this) {
            this.classList.remove("active");
        }
    });
}

// =======================================
// ON LOAD
// =======================================

window.addEventListener("load", () => {

    // Restaurar fondo
    const savedBg = localStorage.getItem("selectedBg");
    if (savedBg) {
        document.body.style.background =
            `url('/static/img/${savedBg}') center/cover fixed`;
    }

    // Restaurar color
    const savedColor = localStorage.getItem("selectedColor");
    if (savedColor && colors[savedColor]) {
        document.documentElement.style
            .setProperty("--primary", colors[savedColor]);
    }

    initTerminal();
});

// =======================================
// TERMINAL TYPEWRITER
// =======================================

function initTerminal() {

    const title = document.getElementById("experience-title");
    if (!title) return;

    const text = "EXPERIENCIA LABORAL";
    let i = 0;
    title.innerHTML = "";

    function type() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 60);
        }
    }

    setTimeout(type, 600);
}

// =======================================
// TIMELINE ULTRA PRO
// =======================================

const timeline = document.querySelector(".timeline");
const timelineLine = document.querySelector(".timeline-line");
const timelineItems = document.querySelectorAll(".timeline-item");

if (timeline && timelineLine) {

    window.addEventListener("scroll", () => {

        const rect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Línea crece
        if (rect.top < windowHeight) {

            let height = windowHeight - rect.top;
            height = Math.min(height, timeline.offsetHeight);

            timelineLine.style.setProperty("--line-height", height + "px");
        }

        // Activar items
        timelineItems.forEach(item => {

            const itemRect = item.getBoundingClientRect();
            const dot = item.querySelector(".timeline-dot");
            const content = item.querySelector(".timeline-content");

            if (itemRect.top < windowHeight * 0.8) {
                item.classList.add("visible");
                if (dot) dot.classList.add("active");
            }

        });

    });

}

// =======================================
// TOGGLE CONTENT
// =======================================

document.querySelectorAll(".timeline-content").forEach(content => {
    content.addEventListener("click", () => {
        content.classList.toggle("active");
    });
});