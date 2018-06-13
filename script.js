function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function hearts() {
  const particle = document.querySelector(".particles.music");
  const notecount = particle.offsetWidth / 100 * 3;
  for (let i = 0; i <= notecount; i += 1) {
    const size = getRandomArbitrary(40, 100) / 10;
    const leftOrRight = getRandomArbitrary(0, 1) > 0.5 ? "left" : "right";
    particle.insertAdjacentHTML(
      "beforeend",
      `<span class="particle" style="top:${getRandomArbitrary(
        -20,
        10
      )}%; ${leftOrRight}:${getRandomArbitrary(-20, 5)}%;
      width:${size}px; height:${size}px;animation-delay: ${getRandomArbitrary(
        0,
        30
      ) / 10}s;">♪</span>`
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  hearts();
});
