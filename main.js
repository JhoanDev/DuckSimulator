//criando variaveis e selecionando elementos
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
  initialVelocity = parseFloat(viInput.value) //velocidade inicial
  finalVelocity = parseFloat(vfInput.value) //velocidade final
  time = distance / ((initialVelocity + finalVelocity) / 2) //tempo gasto para percorrer os 750M de acordo com vi e vf
  acceleration = (finalVelocity - initialVelocity) / time //aceleração em m/s
  currentTime = 0 //tempo inicial
  atext.innerHTML = `Aceleração: <b>${acceleration.toFixed(2)} (m/s)</b>` //display da acceleração 
  animation = setInterval(update, 10) //a posição do pato será atualizada a cada 10 milesegundos
}

function update() { //função onde a fisica acontece
    currentTime += 0.01 //tempo atual
    tptext.innerHTML = `Tempo gasto: <b>${currentTime.toFixed(2)} (s)</b>` //display do tempo atual 
    let currentVelocity = initialVelocity + acceleration * currentTime //velocidade atual
    vatext.innerHTML = `Velocidade atual: <b>${currentVelocity.toFixed(0)} (m/s)</b></p>` // //display da velocidade atual
    let currentDistance = initialVelocity * currentTime + (acceleration * currentTime * currentTime) / 2 //distancia percorrida até o momento
    duck.style.left = currentDistance + "px" //movimentando o pato de acordo com a distancia
    if (currentTime >= time || currentDistance == distance) { //caso o pato tenha chegado na distancia ou tempo encerra a função
      clearInterval(animation)
    }
  }
  