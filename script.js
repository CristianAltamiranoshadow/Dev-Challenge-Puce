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

// ¨se veia feo el boton lo oculte XD)
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("logoProyecto");
  const span = document.getElementById("nombreArchivo");

  input.addEventListener("change", () => {
    span.textContent = input.files.length > 0
      ? input.files[0].name
      : "Ningún archivo seleccionado";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }
});
// ¨se veia feo el boton lo oculte XD)
document.querySelectorAll('a[href]').forEach(link => {
  link.addEventListener('click', e => {
    const target = link.getAttribute('href');
    if (target.startsWith('#') || target === 'javascript:void(0)') return;

    e.preventDefault();
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.add('active');
    setTimeout(() => {
      window.location.href = target;
    }, 600);
  });
});
// ¨musica script)
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bgMusic');
  const toggleBtn = document.getElementById('toggleMusic');

  if (audio && toggleBtn) {
    let muted = false;

    toggleBtn.addEventListener('click', () => {
      muted = !muted;
      audio.muted = muted;
      toggleBtn.textContent = muted ? '🔇' : '🔊';
      toggleBtn.setAttribute('aria-label', muted ? 'Sonido desactivado' : 'Sonido activado');
    });
  }
});
