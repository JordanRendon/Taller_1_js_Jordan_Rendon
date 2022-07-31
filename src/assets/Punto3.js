console.warn('Punto-3')


// Escribir un algoritmo para calcular el índice de masa corporal de una
// persona.

alert('Porvafor ingrese la siguiente informacion para saber su indice de masa corporal')

const peso = Number(prompt('Ingrese su peso en kg ejemplo: 72'))
const altura = Number(prompt('Ingrese su altura en mts ejemplo: 1.65'))

let imc = (peso/(altura*altura)).toFixed(2)
alert(`Su peso es ${peso}kg , su altura de ${altura}mts y su indice de masa corporal es: ${imc}`)


