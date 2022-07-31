console.warn('Punto-5')

// Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el
// mes al que corresponde el valor ingresado, la cantidad de días que tiene
// ese mes y sus signos del zodiaco. Ejemplo: si el valor ingresado es 5,
// entonces imprimir “Mayo”, “31 días”, “Tauro - Géminis”.


let numero = Number(prompt('Ingrese un numero del 1 al 12 para saber a que mes corresponde, cuantos dias tiene y sus signos'))

switch (numero) {
  case 1:
    alert(`Su mes es Enero tiene 31 dias, Y sus signos zodiacales son Capricorbio y Acuario`)
    break
  case 2:
    alert(`Su mes es Febrero tiene 28 dias, Y sus signos zodiacales son Acurairo y Piscis`)
    break
  case 3:
    alert(`Su mes es Marzo tiene 31 dias, Y sus signos zodiacales son Psicis y Aries}`)
    break
  case 4:
    alert(`Su mes es Abril tiene 30 dias, Y sus signos zodiacales son Aries y Tauro`)
    break
  case 5:
    alert(`Su mes es Mayo tiene 31 dias, Y sus signos zodiacales son Tauro y Geminis`)
    break
  case 6:
    alert(`Su mes es Junio tiene 30 dias, Y sus signos zodiacales son Geminis y Cancer`)
    break
  case 7:
    alert(`Su mes es Julio tiene 31 dias, Y sus signos zodiacales son Cancer y Leo`)
    break
  case 8:
    alert(`Su mes es Agosto tiene 31 dias, Y sus signos zodiacales son Leo y Virgo`)
    break
  case 9:
    alert(`Su mes es Septiembre tiene 30 dias, Y sus signos zodiacales son Virgo y Libra`)
    break
  case 10:
    alert(`Su mes es Octubre tiene 31 dias, Y sus signos zodiacales son Libra y Escorpion`)
    break
  case 11:
    alert(`Su mes es Noviembre tiene 30 dias, Y sus signos zodiacales son Escorpion y Sagitario`)
    break
  case 12:
    alert(`Su mes es Diciembre tiene 31 dias, Y sus signos zodiacales son Sagitario y Capricornio`)
    break

  default:
    alert(`Error: Ingrese un numero valido, entre el 1 y el 12`)
    break
}