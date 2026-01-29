const raio = document.getElementById("random-raio");

function flashraio() {
  const maxX = window.innerWidth - 200;
  const maxY = window.innerHeight - 200;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  raio.style.left = `${x}px`;
  raio.style.top = `${y}px`;
  raio.style.opacity = 1;

  setTimeout(() => {
    raio.style.opacity = 0;
  }, 300); // tempo visível (ms)

  const nextFlash = Math.random() * 5000 + 1500;
  setTimeout(flashraio, nextFlash);
}

flashraio();
