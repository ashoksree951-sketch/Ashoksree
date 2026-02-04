const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const options = [
  "Prize 1",
  "Prize 2",
  "Try Again",
  "Bonus",
  "Lucky!"
];

const colors = ["#ff6384", "#36a2eb", "#ffce56", "#4caf50", "#9c27b0"];
let angle = 0;

function drawWheel() {
  const slice = 2 * Math.PI / options.length;

  options.forEach((text, i) => {
    ctx.beginPath();
    ctx.fillStyle = colors[i];
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 200, slice * i + angle, slice * (i + 1) + angle);
    ctx.fill();

    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(slice * i + slice / 2 + angle);
    ctx.fillStyle = "#fff";
    ctx.font = "16px Arial";
    ctx.fillText(text, 80, 10);
    ctx.restore();
  });
}

function spin() {
  const spinAngle = Math.random() * 2000 + 1000;
  let current = 0;

  const interval = setInterval(() => {
    angle += 0.1;
    current += 10;
    ctx.clearRect(0, 0, 400, 400);
    drawWheel();

    if (current >= spinAngle) {
      clearInterval(interval);
    }
  }, 20);
}

drawWheel();
