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
  }, Math.random() * 250 + 120);

  setTimeout(randomGlitch, Math.random() * 5000 + 900);
}

randomGlitch();

const skull = document.getElementById("random-skull");

function flashSkull() {
  if (!skull) return;

  const size = 180;
  const maxX = window.innerWidth - size;
  const maxY = window.innerHeight - size;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  skull.style.left = `${x}px`;
  skull.style.top = `${y}px`;
  skull.style.opacity = 1;

  setTimeout(() => {
    skull.style.opacity = 0;
  }, 120);

  const nextFlash = Math.random() * 5000 + 1500;
  setTimeout(flashSkull, nextFlash);
}

flashSkull();
