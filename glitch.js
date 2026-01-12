const glitch = document.getElementById("random-glitch");

function randomGlitch() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const size = Math.random() * 140 + 90;
  glitch.style.width = size + "px";

  glitch.style.left = Math.random() * (vw - size) + "px";
  glitch.style.top = Math.random() * (vh - size) + "px";

  glitch.style.opacity = 1;

  setTimeout(() => {
    glitch.style.opacity = 0;
  }, 300);

  setTimeout(randomGlitch, Math.random() * 5000 + 900);
}

randomGlitch();
