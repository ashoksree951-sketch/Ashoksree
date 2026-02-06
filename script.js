const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const options = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6"
];

const colors = [
  "#e91e63",
  "#3f51b5",
  "#4caf50",
  "#ff9800",
  "#9c27b0",
  "#00bcd4"
];

let startAngle = 0;
const arc = (2 * Math.PI) / options.length;

function drawWheel() {
  for (let i = 0; i < options.length; i++) {
    const angle = startAngle + i * arc;

    ctx.beginPath();
    ctx.fillStyle = colors[i];
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 200, angle, angle + arc);
    ctx.fill();

    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(angle + arc / 2);
    ctx.fillStyle = "#fff";
    ctx.font = "16px Arial";
    ctx.fillText(options[i], 90, 10);
    ctx.restore();
  }
}

function spin() {
  const spinAngle = Math.random() * 3000 + 2000;
  let spinTime = 0;
  const spinInterval = setInterval(() => {
    spinTime += 30;
    startAngle += 0.3;
    ctx.clearRect(0, 0, 400, 400);
    drawWheel();

    if (spinTime >= spinAngle) {
      clearInterval(spinInterval);
      showResult();
    }
  }, 30);
}

function showResult() {
  const degrees = (startAngle * 180) / Math.PI + 90;
  const index = Math.floor(
    (360 - (degrees % 360)) / (360 / options.length)
  );
  document.getElementById("result").innerText =
    "Result: " + options[index];
}

drawWheel();
