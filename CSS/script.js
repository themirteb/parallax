const parallaxContainer = document.querySelector(".parallax-container");
const parallaxLayers = document.querySelectorAll(".parallax-layer");

parallaxContainer.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  parallaxLayers.forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - mouseX * speed) / 100;
    const y = (window.innerHeight - mouseY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});