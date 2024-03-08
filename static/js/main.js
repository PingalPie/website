// Blob Effect

document.addEventListener('DOMContentLoaded', (event) => {
const blob = document.getElementById("blob");

window.onpointermove = event => {
  const { clientX, clientY } = event;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}
})

// Text Effect

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.addEventListener('DOMContentLoaded', () => {
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

// Easter egg
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.getElementsByClassName('easter-egg');
  
  i = 0
  while (i < elements.length) { 
    elements[i].onmouseover = _ => {
      window.location.href = "/imagemagic"
    }
    i++
  }
})
