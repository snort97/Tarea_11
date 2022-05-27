//Ejercicio 1
var matrix = "matrix"
var nombre
nombre = prompt(`Ingresa tu nombre`,``)
console.log(`Ahora estás en la matrix ${nombre}`)

//Ejercicio 2
var numero_uno
var numero_dos
numero_uno = prompt(`Ingresa primer número decimal`)
numero_dos = prompt(`Ingresa segundo número entero`)
var suma = parseFloat(numero_uno) + parseInt(numero_dos)
console.log(`Primer número ${numero_uno}`)
console.log(`Segundo número ${numero_dos}`)
console.log(`Resultado de la suma ${suma}`)
//Ejercicio 3
var numero_uno
var numero_dos
var numero_tres
numero_uno = prompt(`Ingresa primer número`)
numero_dos = prompt(`Ingresa segundo número`)
var suma = parseInt(numero_uno) + parseInt(numero_dos)
window.confirm(`El resultado de la suma es: ${suma}`)
numero_tres = prompt(`Ingresa un tercer número`)
var resultado = suma * parseInt(numero_tres)
window.confirm(`El resultado de la suma es: ${resultado}`)
//Ejercicio 4
var kilometros
var litros_combustible
kilometros = prompt(`Ingresa los kilometros recorridos`)
litros_combustible = prompt(`Ingresa la cantidad de combustible en litros`)
var consumo = parseFloat(kilometros) / parseFloat(litros_combustible)
console.log(`Kilometros recorridos ${kilometros}`)
console.log(`Litros de combustible gastados ${litros_combustible}`)
window.confirm(`El consumo de kilometro es de: ${consumo}`)
//Ejercicio 5
var fahrenheit
temperatura = prompt(`Ingresa la temperatura en fahrenheit`)
celsius = (5/9) * ((parseFloat(temperatura))-32)
console.log(`Tempratura ingresada ${temperatura}`)
console.log(`Temperatura celsius ${celsius}`)
//Ejercicio 6
var numero_uno
var numero_dos
var numero_tres
numero_uno = prompt(`Ingresa primer número`)
numero_dos = prompt(`Ingresa segundo número`)
numero_tres = prompt(`Ingresa un tercer número`)
var suma = parseFloat(numero_uno) + parseFloat(numero_dos) + parseFloat(numero_tres)
var promedio = suma / 3
window.confirm(`El resultado de la suma es: ${promedio}`)
//Ejercicio 7
var numero_uno
numero_uno = prompt(`Ingresa el numero a calcular el porcentaje`)
porcentaje = parseFloat(numero_uno)*(15/100)
total = parseFloat(numero_uno) - porcentaje
window.confirm(`Descontando el 15% ${total}`)
//Ejercicio 8
var palabra_uno
var palabra_dos
palabra_uno = prompt(`Ingresa la primer palabra`)
palabra_dos = prompt(`Ingresa la segunda palabra`)
console.log(`Primera palabra ${palabra_uno}`)
console.log(`Segunda palabra ${palabra_dos}`)
console.log(`${palabra_uno} ${palabra_dos}`)
//Ejercicio 9
var texto
texto = prompt(`Ingresa un texto`)
var primerCaracter = texto.charAt(0)
window.confirm(`El carácter en primer lugar es: ${primerCaracter}`)
numeroCaracteres = texto.length;
window.confirm(`El número de caracteres es: ${numeroCaracteres}`)
posicionCaracter = prompt(`Ingresa un número menor o igual al número de caracteres`)
sacarPosicion = texto.charAt(posicionCaracter)
window.confirm(`El caracter en esa posicion es: ${sacarPosicion}`)
//Ejercicio 10
var showsMusicales
showsMusicales = prompt(`Ingresa número de shows musicales vistos en el último año`)
if (showsMusicales <= 3){

    window.confirm(`False`)
} else{

    window.confirm(`True`)
}
//Ejercicio 11
var fecha
fecha = prompt(`Ingresa una fecha por 8 números desde día, mes y año`)
function formatStringToDate(fecha){
    var myDate = text.split('/');
    return new Date(myDate[2], myDate[1] - 1, myDate[0]);
}
Date.parse(formatStringToDate)
window.confirm(`Su fecha es ${fecha}`)
//Ejercicio 12
var numero 
numero = prompt("Introduce un número entero");
var resultado = parImpar(numero);
alert("El número "+numero+" es "+resultado);
function parImpar(numero) {
  if(numero % 2 == 0) {
    window.confirm(`Número entero ${numero}`)  
    return "par";
  }
  else {
    window.confirm(`Número entero ${numero}`)
    return "impar";
  }
}
//Ejercicio 13
var edad 
var articulosComprados
edad = prompt("Ingrese su edad");
articulosComprados = prompt("Ingrese cantidad de articulos comprados");
if(edad <= 18 && articulosComprados > 1){
    window.confirm(`True`)
}else{
    window.confirm(`False`)
}
//Ejercicio 14
var texto
texto = prompt(`Ingresa un texto`)
numeroCaracteres = texto.length;
var resultado = parImpar(numeroCaracteres);
function parImpar(numeroCaracteres) {
  if(numeroCaracteres % 2 == 0) {  
    window.confirm(`Frase: ${texto}`)
    window.confirm(`False`)
  }
  else {
    window.confirm(`Frase: ${texto}`)
    window.confirm(`True`)
  }
}
//Ejercicio 15
var texto_uno
var texto_dos
texto_uno = prompt(`Ingresa primer palabra`)
numeroCaracteres_uno = texto_uno.length;
texto_dos = prompt(`Ingresa segunda palabra`)
numeroCaracteres_dos = texto_dos.length;
if(numeroCaracteres_uno < numeroCaracteres_dos){
    window.confirm(`True`)
}else{
    window.confirm(`False`)    
}
//Ejercicio 16
var nombre_uno
var nombre_dos
nombre_uno = prompt(`Ingresa primer nombre`)
var primerCaracterUno = nombre_uno.charAt(0)
var ultimoCaracterUno = nombre_uno.charAt(nombre_uno.length - 1)
nombre_dos = prompt(`Ingresa segundo nombre`)
var primerCaracterDos = nombre_dos.charAt(0)
var ultimoCaracterDos = nombre_dos.charAt(nombre_dos.length - 1)
if(primerCaracterUno == primerCaracterDos && ultimoCaracterUno == ultimoCaracterDos){
    window.confirm(`${nombre_uno} ${nombre_dos}`)
    window.confirm(`True`)
}else{
    window.confirm(`${nombre_uno} ${nombre_dos}`)
    window.confirm(`False`)
}
//Ejercicio 17
var numero
var numero_entero
numero = prompt(`Ingresa un número`)
if(numero < 0){
    numero_entero = numero * -1
    window.confirm(`${numero_entero}`)
}else{
    window.confirm(`${numero}`)
}
//Ejercicio 18
var numero_uno
var numero_dos
numero_uno = prompt(`Ingresa primer número`)
numero_dos = prompt(`Ingresa segundo número`)
if(numero_uno > numero_dos){
    window.confirm(`El número mayor es: ${numero_uno}`)
}else{
    window.confirm(`El número mayor es: ${numero_dos}`)
}
//Ejercicio 19
var letra
letra = prompt(`Ingresa una letra`)
function buscarVocal(letra){
    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        window.confirm(`Es Vocal`)
    }else if(letra.length !== 1){
        window.confirm(`No es Vocal`)
    }
}
buscarVocal(letra)
//Ejercicio 20
var numero_uno
var numero_dos
var numero_tres
var menor
numero_uno = prompt(`Ingresa primer número`)
numero_dos = prompt(`Ingresa segundo número`)
numero_tres = prompt(`Ingresa tercer número`)
if(numero_uno <= numero_dos && numero_uno <= numero_tres){
    menor = numero_uno
} else if(numero_dos <= numero_uno && numero_dos <= numero_tres){
    menor = numero_dos
}else{
    menor = numero_tres
}
window.confirm(`Numero menor es : ${menor}`)
