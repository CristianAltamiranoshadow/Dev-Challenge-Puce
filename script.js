document.addEventListener("DOMContentLoaded", () => {
  // Animación de entrada del título
  const heroText = document.querySelector(".hero-content h1");
  heroText.style.opacity = 0;
  heroText.style.transform = "translateY(20px)";
  setTimeout(() => {
    heroText.style.transition = "all 1s ease";
    heroText.style.opacity = 1;
    heroText.style.transform = "translateY(0)";
  }, 200);

  // Funcionalidad del botón hamburguesa
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Opcional: cerrar menú al hacer clic en un enlace (solo en móvil)
  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const PARTICLES = document.querySelectorAll('.particle');
  PARTICLES.forEach(P => {
    P.setAttribute('style', `
      --x: ${RANDOM(20, 80)};
      --y: ${RANDOM(20, 80)};
      --duration: ${RANDOM(6, 20)};
      --delay: ${RANDOM(1, 10)};
      --alpha: ${RANDOM(40, 90) / 100};
      --origin-x: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
      --origin-y: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
      --size: ${RANDOM(40, 90) / 100};
    `);
  });
});
