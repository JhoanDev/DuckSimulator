let duck = document.getElementById("duck");
let viInput = document.getElementById("vi");
let vfInput = document.getElementById("vf");
let tInput = document.getElementById("t");
let initialVelocity = 0;
let finalVelocity = 0;
let time = 0;
let acceleration = 0;
let distance = 0;
let currentTime = 0;
let animation;

function start() {
  initialVelocity = parseFloat(viInput.value);
  finalVelocity = parseFloat(vfInput.value);
  time = parseFloat(tInput.value);
  acceleration = (finalVelocity - initialVelocity) / time;
  distance = initialVelocity * time + (acceleration * time * time) / 2;
  currentTime = 0;
  animation = setInterval(update, 10);
}

function update() {
    currentTime += 0.01;
    let currentVelocity = initialVelocity + acceleration * currentTime;
    let currentDistance = initialVelocity * currentTime + (acceleration * currentTime * currentTime) / 2;
    duck.style.left = currentDistance + "px";
    if (currentTime >= time) {
      clearInterval(animation);
    }
  }
  