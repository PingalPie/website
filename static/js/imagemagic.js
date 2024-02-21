document.addEventListener('DOMContentLoaded', () => {
  const images = document.getElementsByClassName("image");
  const help = document.getElementById('help')

  let globalIndex = 0,
      last = { x: 0, y: 0 };

  const activate = (image, x, y) => {
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.style.zIndex = globalIndex;

    image.dataset.status = "active";

    last = { x, y };
  }

  const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
  }

  const handleOnMove = e => {
    help.innerHTML = ""
    if (distanceFromLast(e.clientX, e.clientY) > (window.innerWidth / 20)) {
      const lead = images[globalIndex % images.length],
            tail = images[(globalIndex - 5) % images.length];

      activate(lead, e.clientX, e.clientY);

      if (tail) tail.dataset.status = "inactive";

      globalIndex++;
      //nav.style.zIndex = globalIndex + 1;
    }
  }

  window.onmousemove = e => handleOnMove(e);

  // window.onmousemove = e => handleOnMove(e.touches[0]);
})


// Text Effect
document.addEventListener('DOMContentLoaded', () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
let query = Array.from(document.querySelectorAll(".magicword"));

for (que in query){

query[que].onmouseover = event => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if(iteration >= event.target.dataset.value.length){
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}
}
})


