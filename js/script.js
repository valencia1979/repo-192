console.log("Hola mundo")

/* JavaSript es un lenguaje de programacion*/ 
/* JAVA NO ES JAVASCRIPT */
/*JS es un lenguaje interpretado por motor v8*/
/* Js es un lenguaje case sensitive*/
/*TIPOS DE DATOS PRIMITIVOS*/

//string = cadena de caracteres entre comillas
//ejemplo "hola" "1"
/*"hola"
"1"
*/
// Numbers = dastos numericos
/* 2 
 -4 
 1.5 
 -1.6

// Boolean 
 tru 
 falsa 
 
   
//undefined = datos indefinidos
undefined

// null = ausencia de datos
null

//COMPARADORES = AYUDA A COMPARAR COSAS Y DEVUELVEN EN BOOLEANOS*/
  
/*420 > 210
420<210
420<=420
"serenisima" == "la martona"
"serenisima" == "Serenisima"
"pepe"!="lucas"
true===1 //true es extricamete 1
1 !==true*/
 
//null = es ausencia de valor
//null == undefined

//OPERADORES ARITMETICO
// + - * / % 
//- * / %  SIMPRE DEVUELVE NUMEROS
// % es modulo que saca el resto de una division
// + sumar => devuelve un numero, Ocurre cuando no hay string
//+ concatenar => devuelve un string, ocurre en presencia de un string

//VARIABLES => un espacio en la memoria para almacenar un dato(o mas de uno)

//var=> -autoinicializa en undefined si no le asignamos valor
//      -Nos permite reasignarla a var
//     - Nos permite redeclarlacion
//     -tiene hoisting automatico

/*var nombre, numeroFavorito
 console.log(nombre)
 var numeroFavorito //Declaramos una variable tipo var, se inicializa en undefined
 var nombre="pepe"
 nombre="juan"
 var nombre="lucas"*/

//let
// nos auto inicializa en undefined sino le asignamos valor
// nos permite reasignarla
// NO permite la redeclaracion 
// NO tiene hoisting autoamtico

/*let nombre
console.log(nombre)
 nombre="juan"
 nombre="pepe"*/

//const

//console.log(nombre)
//const nombre="pepe"
//const nombre="lucas"

// NO se autoinicializa en undefined si no le asignamos valor
// NO nos permite la reasignacion
//NO permite la redeclaracion
//NO tiene hoisting automatico

//Control de flujo / condicionales
/*let enojado = false
//.log("hola")
console.log("como estas?")
if(enojado){
    console.log("yo estoy como el ojete")
}
else{
    console.log("yo estoy bien")
}*/

let decision= prompt("ingrese una decision") //prompt es como el console.log
if(decision==1){
    console.log("seleccionastes al personaje Martin")
}
else if(decision==2){
    console.log("seleccionaste al persoanje Pepe")
}
else if(decision==3){
    console.log("seleccionaste al persoanje Maria")
}
else{
    console.log("ERROR: Decision invalida")
}