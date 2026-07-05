const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
    document.querySelector(".landing").classList.add("hidden");
    document.getElementById("galaxy").classList.remove("hidden");
    document.querySelector(".dashboard").classList.remove("hidden");
});
