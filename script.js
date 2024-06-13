
const canvas = document.getElementById("moving-object");
const ctx = canvas.getContext("2d");

// Define wave properties
const width = window.innerWidth;
const height = window.innerHeight;
const waveLength = 0.1; // Adjust for wave frequency
const amplitude = 50; // Adjust for wave height
const offsetY = height / 2; // Adjust for wave position

canvas.width = width;
canvas.height = height;

function animate() {
  ctx.clearRect(0, 0, width, height); // Clear canvas for each frame

  let x = 0;
  for (let i = 0; i < width; i++) {
    const y = Math.sin(x) * amplitude + offsetY;
    ctx.lineTo(i, y);
    x += waveLength;
  }

  ctx.strokeStyle = "#0095ff"; // Adjust wave color
  ctx.stroke();

  requestAnimationFrame(animate);
}

animate();