var nombres = ["Ana", "Maria", "Andrea"];
nombres.forEach(function (nombre) {
    if (nombre == "Ana") {
        console.log("Hola Ana");
    }
});
var alumnos = [];
alumnos.push({ nombre: "Ana", apellido: "Pineda" });
alumnos.push({ nombre: "Eduardo", apellido: "salcedo" });
alumnos.push({ nombre: "Maria", apellido: "Pineda" });
alumnos.forEach(function (alumno) {
    console.log(alumno.nombre);
});
