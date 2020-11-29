interface Alumno{
    nombre: string;
    apellido: string;
}


var alumnos : Alumno[] = []

var ana: Alumno={
    nombre:"Ana",
    apellido:"Garmendia"
}
var diana: Alumno={
    nombre:"diana",
    apellido:"Garmendia"
}


alumnos.push(ana);
alumnos.push(diana);


console.log(alumnos)