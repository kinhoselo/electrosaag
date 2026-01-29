const logos = [
  {
    el: document.getElementById("random-glitch"),
    baseSize: 160
  },
  {
    el: document.getElementById("random-skull"),
    baseSize: 180
  },
  {
    el: document.getElementById("raio-glitch"),
    baseSize: 140
  }
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function spawnLogo(logo) {
  const el = logo.el;

  // 🎲 TAMANHO ALEATÓRIO (proporção)
  const scale = randomBetween(0.5, 1.6);
  const size = logo.baseSize * scale;
  el.style.width = size + "px";

  // 📍 POSIÇÃO ALEATÓRIA
  const maxX = window.innerWidth - size;
  const maxY = window.innerHeight - size;

  el.style.left = randomBetween(0, maxX) + "px";
  el.style.top = randomBetween(0, maxY) + "px";

  // 🌀 ROTAÇÃO ALEATÓRIA
  el.style.transform = `rotate(${randomBetween(0, 360)}deg)`;

  // ⏱ TEMPO QUE FICA VISÍVEL
  const visibleTime = randomBetween(100, 900);

  el.style.opacity = "1";

  setTimeout(() => {
    el.style.opacity = "0";
  }, visibleTime);

  // ⏳ TEMPO ATÉ APARECER DE NOVO
  const nextSpawn = randomBetween(500, 5000);

  setTimeout(() => spawnLogo(logo), nextSpawn);
}

logos.forEach(logo => spawnLogo(logo));
