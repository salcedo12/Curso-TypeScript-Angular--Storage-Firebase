var alumnos = [];
alumnos.push({ alumnoID: 1, nombre: "Ana", apellido: "Pineda" });
alumnos.push({ alumnoID: 2, nombre: "Eduardo", apellido: "salcedo" });
alumnos.push({ alumnoID: 3, nombre: "Maria", apellido: "Pineda" });
var alumnoEncontrado = alumnos.find(function (alumno1) {
    return alumno1.alumnoID == 2;
});
console.log(alumnoEncontrado);
var alumnoEncontrado2 = alumnos.find(function (alumno) {
    return alumno.nombre.includes("ed");
});
console.log(alumnoEncontrado2);
