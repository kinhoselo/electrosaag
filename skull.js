const skull = document.getElementById("random-skull");

function flashSkull() {
  const maxX = window.innerWidth - 200;
  const maxY = window.innerHeight - 200;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  skull.style.left = `${x}px`;
  skull.style.top = `${y}px`;
  skull.style.opacity = 1;

  setTimeout(() => {
    skull.style.opacity = 0;
  }, 300); // tempo visível (ms)

  const nextFlash = Math.random() * 5000 + 1500;
  setTimeout(flashSkull, nextFlash);
}

flashSkull();
