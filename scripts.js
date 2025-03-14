document.addEventListener("DOMContentLoaded", function() {
    const hexagons = document.querySelectorAll(".hex");
    hexagons.forEach(hex => {
        hex.addEventListener("click", function() {
            window.location.href = this.querySelector("a").href;
        });
    });
});