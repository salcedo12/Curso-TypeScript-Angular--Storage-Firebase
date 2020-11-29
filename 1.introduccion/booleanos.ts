//== Para comprar operaciones si son iguales
//!= para comprar operaciones distintas
//&& nos devuelve un verdadero cuando ambas expresiones son verdaderas
// || nos devulve un verdadero si cualquiera expresion es verdadera

var esNuevo:boolean = false;
var deseaImprimir:boolean = true;

var juan ="juan";
var juan2 = "Juan";

var listaNumero1:number=100;
var listaNumero2:number=120;
var sonNombresIguales: boolean = (juan == juan2)
var aceptaDescuestos:boolean= (15+18==33)


var sonAmbosVerdaderos: boolean= sonNombresIguales && aceptaDescuestos
var sonLasListasIguales: boolean=(listaNumero1 != listaNumero2)

console.log("acepta descuentos: ", aceptaDescuestos)
console.log("son nombres  iguales : ", sonNombresIguales)
console.log("son ambos verdaderos ", sonAmbosVerdaderos)
console.log("Las listas son iguales", sonLasListasIguales)


var esAlgunaverdadera: boolean = sonNombresIguales || aceptaDescuestos || sonAmbosVerdaderos || sonLasListasIguales
console.log("Es alguna verdadera: ",esAlgunaverdadera)


var sonTodasIguales: boolean = sonNombresIguales && aceptaDescuestos && sonAmbosVerdaderos && sonLasListasIguales
console.log("Son todas iguales: ",sonTodasIguales)






