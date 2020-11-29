//== Para comprar operaciones si son iguales
//!= para comprar operaciones distintas
//&& nos devuelve un verdadero cuando ambas expresiones son verdaderas
// || nos devulve un verdadero si cualquiera expresion es verdadera
var esNuevo = false;
var deseaImprimir = true;
var juan = "juan";
var juan2 = "Juan";
var listaNumero1 = 100;
var listaNumero2 = 120;
var sonNombresIguales = (juan == juan2);
var aceptaDescuestos = (15 + 18 == 33);
var sonAmbosVerdaderos = sonNombresIguales && aceptaDescuestos;
var sonLasListasIguales = (listaNumero1 != listaNumero2);
console.log("acepta descuentos: ", aceptaDescuestos);
console.log("son nombres  iguales : ", sonNombresIguales);
console.log("son ambos verdaderos ", sonAmbosVerdaderos);
console.log("Las listas son iguales", sonLasListasIguales);
var esAlgunaverdadera = sonNombresIguales || aceptaDescuestos || sonAmbosVerdaderos || sonLasListasIguales;
console.log("Es alguna verdadera: ", esAlgunaverdadera);
var sonTodasIguales = sonNombresIguales && aceptaDescuestos && sonAmbosVerdaderos && sonLasListasIguales;
console.log("Son todas iguales: ", sonTodasIguales);
