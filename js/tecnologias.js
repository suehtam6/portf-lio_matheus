const techMap = {
    java: "Java",
    html: "HTML5",
    css: "CSS3",
    js: "JavaScript",
    git: "GitHub",
    figma: "Figma"
};

document.querySelectorAll(".tech img").forEach(img => {
    img.addEventListener("click", () => {
        const card = img.parentElement;

        const existente = card.querySelector(".nome-tech");
        if (existente) {
            existente.remove();
            return;
        }

        
        const techClass = Object.keys(techMap)
            .find(classe => img.classList.contains(classe));

        if (!techClass) return;

       
        const nome = document.createElement("span");
        nome.className = "nome-tech";
        nome.textContent = techMap[techClass];

        card.appendChild(nome);
    });
});