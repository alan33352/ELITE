document.addEventListener("DOMContentLoaded", () => {
  let slideActual = 0;
  const slider = document.getElementById("slider");
  const totalSlides = 2;

  window.cambiarSlide = function (direccion) {
    slideActual += direccion;

    if (slideActual >= totalSlides) slideActual = 0;
    if (slideActual < 0) slideActual = totalSlides - 1;

    slider.style.transform = `translateX(-${slideActual * 100}%)`;
    document.getElementById("indicador-slide").innerText = `${slideActual + 1} / ${totalSlides}`;
  };
});
