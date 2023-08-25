const spans = document.querySelectorAll(".banner_nav");
let currentIndex = 0;
let intervalId;

 function cambiarBanner() {
  spans[currentIndex].classList.remove("banner_nav--select");
  currentIndex = (currentIndex + 1) % spans.length;
  spans[currentIndex].classList.add("banner_nav--select");

  const header = document.querySelector("section.hero");
  header.className = `hero banner_${spans[currentIndex].id}`;
}

function handleSpanClick() {
  const spanId = this.id;
  spans.forEach((s, index) => {
    if (s.id === spanId) {
      s.classList.add("banner_nav--select");
      currentIndex = index; // Actualizar el índice para continuar desde el span clickeado
    } else {
      s.classList.remove("banner_nav--select");
    }
  });

  const header = document.querySelector("section.hero");
  header.className = `hero banner_${spanId}`;
  
  clearInterval(intervalId); // Limpiar el intervalo para detener el carrusel
  intervalId = setInterval(cambiarBanner, 4000); // Volver a iniciar el carrusel después de 5 segundos
}

// Iniciar el carrusel
intervalId = setInterval(cambiarBanner, 4000);

// Agregar evento clic a cada span
spans.forEach((span) => {
  span.addEventListener("click", handleSpanClick);
});
