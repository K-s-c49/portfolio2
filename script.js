console.log("khushal singh chundawat");
document.querySelector('.cross').Style.display = 'none'
document.getElementById("hamburger").addEventListener("click", () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
});