// Text Effect

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.addEventListener("DOMContentLoaded", () => {
  let query = Array.from(document.querySelectorAll(".magicword"));

  for (que in query) {
    query[que].onmouseover = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };
  }
});
// Homepage animation
document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var a = 250;
    var ball_r = 8;
    var ball_w = 90;
    var ball_h = 27;

    function rect(x, y, fill, stroke) {
	ctx.save();
	ctx.fillStyle = fill;
	ctx.strokeStyle = stroke;
	ctx.beginPath();
	ctx.rect(x, y, a * 0.6, a * 0.6);
	ctx.fill();
	ctx.stroke();
	ctx.clip();
	ctx.fillStyle = stroke;
	ctx.rotate(new Date().getTime() * .0005 % (2 * Math.PI));
	for (var i = 0; i < 20; i++) {
	    ctx.beginPath();
	    ctx.save();
	    ctx.scale(1, ball_h / ball_w);
	    ctx.arc(0, 0, ball_w, 0, 2 * Math.PI);
	    ctx.stroke();
	    ctx.restore();
	    var ba = new Date().getTime() * 0.0023 * (1 + i * 0.09);
	    var ball_x = ball_w * Math.sin(ba);
	    var ball_y = ball_h * Math.cos(ba);
	    ctx.beginPath();
	    ctx.arc(ball_x, ball_y, ball_r, 0, 2 * Math.PI);
	    ctx.fill();
	    ctx.rotate(Math.PI / 18);
	}
	ctx.restore();
    }

    function render() {
	requestAnimationFrame(render);

	ctx.save();
	ctx.translate(canvas.width / 2, canvas.height / 2);

	rect(-a * 0.10, -a * 0.32, "#388be2", "#9038e2");
	rect(-a * 0.32, -a * 0.10, "#9090ff", "#f400fc");
	rect(-a * 0.50, -a * 0.50, "#27bab5", "#00fcf4");

	ctx.restore();
    }
    render();
})
