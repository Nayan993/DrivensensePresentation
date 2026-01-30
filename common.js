function scaleSlide() {
  const slide = document.querySelector(".slide-container");
  if (!slide) return;

  const scaleX = window.innerWidth / 1280;
  const scaleY = window.innerHeight / 720;
  const scale = Math.min(scaleX, scaleY);

  slide.style.transform =
    `translate(-50%, -50%) scale(${scale})`;
}

window.addEventListener("load", scaleSlide);
window.addEventListener("resize", scaleSlide);
