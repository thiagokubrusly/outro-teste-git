let pilotName = prompt ("Insira o seu nome, piloto")

let velocityInicial = 0

let velocityWanted = prompt ("Insira a velocidade almejada")

let confirmation = confirm ("A velocidade objetivada é " + velocityWanted + "km/s?")

if (confirmation) {
    velocityInicial = velocityWanted
}
if (velocityInicial <= 0) {
    alert("A nave está parada. Considere partir e aumentar a velocidade.")
}
else if (velocityInicial <40) {
    alert("Você está devagar, podemos aumentar a velocidade.")
}
else if (velocityInicial <80) {
    alert("Parece uma boa velocidade para manter.")
}
else if (velocityInicial <100) {
    alert("Velocidade alta. Considere diminuir.")
}
else if (velocityInicial >=100) {
    alert("Velocidade perigosa. Controle automático forçado.")
}

if (velocityInicial <= 0) {
    alert("Missão abortada.")
}
else if (velocityInicial > 0) {
    alert ("A atual velocidade da nave é " + velocityWanted + ", " + "piloto " + pilotName + ".")
}