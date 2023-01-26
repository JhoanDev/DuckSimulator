let duck = document.getElementById("duck")
let viInput = document.getElementById("vi")
let vfInput = document.getElementById("vf")
let vatext = document.getElementById("current vel")
let tptext = document.getElementById("Tempo gasto")
let atext = document.getElementById("aceleração")
let initialVelocity = 0
let finalVelocity = 0
let time = 0
let acceleration = 0
let distance = 750
let currentTime = 0
let animation

function start() {
  initialVelocity = parseFloat(viInput.value)
  finalVelocity = parseFloat(vfInput.value)
  time = distance / ((initialVelocity + finalVelocity) / 2)
  acceleration = (finalVelocity - initialVelocity) / time
  currentTime = 0
  atext.innerHTML = `Aceleração: <b>${acceleration.toFixed(2)} (m/s)</b>`
  animation = setInterval(update, 10)
}

function update() {
    currentTime += 0.01
    tptext.innerHTML = `Tempo gasto: <b>${currentTime.toFixed(2)} (s)</b>`
    let currentVelocity = initialVelocity + acceleration * currentTime
    vatext.innerHTML = `Velocidade atual: <b>${currentVelocity.toFixed(0)} (m/s)</b></p>`
    let currentDistance = initialVelocity * currentTime + (acceleration * currentTime * currentTime) / 2
    duck.style.left = currentDistance + "px"
    if (currentTime >= time || currentDistance == distance) {
      clearInterval(animation)
    }
  }
  