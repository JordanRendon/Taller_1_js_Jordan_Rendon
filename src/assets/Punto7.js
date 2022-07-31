console.warn('Punto-7')

// En una sala de cine se están estrenando 4 películas, se desea crear un
// algoritmo que al ingresar un número del 1 al 4 se muestre el nombre de la
// película, la categoría y su valor de entrada.
// ● La primera película es Batman, su categoría es acción y el valor de entrada
// es 5,000.
// ● La segunda película es Los Vengadores, su categoría es acción y el valor de
// la entrada es 10,000.
// ● La tercera película es SuperCool, su categoría es comedia y el valor de la
// entrada es 8,000.
// ● Por último la cuarta película es rápido y furioso 5, subcategoría es de
// aventura eso valor de entrada es 15,000

let numero = Number(prompt('Ingrese un numero del 1 al 4 para saber la informacion de la pelicula'))

const peliculas=['Batman','Los Vengadores', 'Supercool', 'Rapido y Furioso 5']
const categorias=['Accion', 'Comedia', 'Aventura']
const valorEntrada=['5.000','8.000','10.000','15.000']

switch (numero) {
  case 1:
    alert(`La primer pelicula es ${peliculas[0]}, su categoria es ${categorias[0]} y su valor de entreada es ${valorEntrada[0]}`)
    break
  case 2:
    alert(`La segunda pelicula es ${peliculas[1]}, su categoria es ${categorias[0]} y su valor de entreada es ${valorEntrada[2]}`)
    break
  case 3:
    alert(`La tercer pelicula es ${peliculas[2]}, su categoria es ${categorias[1]} y su valor de entreada es ${valorEntrada[1]}`)
    break
  case 4:
    alert(`La cuarta pelicula es ${peliculas[3]}, su categoria es ${categorias[2]} y su valor de entreada es ${valorEntrada[3]}`)
    break
  default:
    alert('Error: por favor ingrese un numero valido, del 1 al 4')
    break 
}