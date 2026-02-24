function openModal(){
    document.getElementById("themeModal").style.display="flex";
}

function closeModal(){
    document.getElementById("themeModal").style.display="none";
}

// Cambiar fondo
document.querySelectorAll(".bg-preview").forEach(bg=>{
    bg.style.backgroundImage = `url('/static/img/${bg.dataset.bg}')`;

    bg.addEventListener("click", ()=>{
        document.body.style.background =
            `url('/static/img/${bg.dataset.bg}') center/cover fixed`;
        localStorage.setItem("selectedBg", bg.dataset.bg);
    });
});

// Colores
const colors = {
    ruby:"#a4161a",
    lapis:"#00587a",
    gold:"#d4af37",
    silver:"#8e9eab"
};

document.querySelectorAll(".color").forEach(c=>{
    c.addEventListener("click", ()=>{
        document.documentElement.style.setProperty("--primary", colors[c.dataset.color]);
        localStorage.setItem("selectedColor", c.dataset.color);
    });
});

// Cargar preferencias
window.onload=()=>{
    const savedBg=localStorage.getItem("selectedBg");
    if(savedBg){
        document.body.style.background=`url('/static/img/${savedBg}') center/cover fixed`;
    }

    const savedColor=localStorage.getItem("selectedColor");
    if(savedColor){
        document.documentElement.style.setProperty("--primary", colors[savedColor]);
    }
};