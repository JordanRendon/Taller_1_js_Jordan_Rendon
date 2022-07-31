console.warn('Punto-1')

// Escribir un algoritmo que valide si la suma de 2 números ingresados es
// positiva, negativa o cero.

alert('Porfavor ingrese dos numeros para saber la suma entre estos y si es positivo o negativo')

const numero1= Number(prompt('Ingrese el primer numero'))
const numero2= Number(prompt('Ingrese el segundo numero'))
let suma = numero1 + numero2

if (suma > 0) {
    alert(`El resultado de la suma entre ${numero1} y ${numero2} es ${suma} y  es positivo`)
}else if(suma === 0){
    alert(`El resultado de la suma entre ${numero1} y ${numero2} es cero`)
}
else{
    alert(`El resultado de la suma entre ${numero1} y ${numero2} es ${suma} y es negativo`)
}