document.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 10;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 10;

    document.getElementById("galaxy").style.transform =
        `translate(${moveX}px, ${moveY}px)`;
});
