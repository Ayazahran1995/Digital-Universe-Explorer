document.querySelectorAll(".planet").forEach(p => {
    p.addEventListener("click", () => {
        document.getElementById("infoPanel").classList.remove("hidden");
        document.getElementById("planetTitle").innerText = p.dataset.name;
    });
});
