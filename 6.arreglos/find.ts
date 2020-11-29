interface Alumno{
    alumnoID:number;
    nombre: string;
    apellido:string;
}

var alumnos: Alumno[] = []

alumnos.push({alumnoID:1,nombre: "Ana", apellido: "Pineda"});

alumnos.push({alumnoID:2,nombre: "Eduardo", apellido: "salcedo"});

alumnos.push({alumnoID:3,nombre: "Maria", apellido: "Pineda"});


var alumnoEncontrado = alumnos.find((alumno1)=>{
    return alumno1.alumnoID == 2
})
console.log(alumnoEncontrado)

var alumnoEncontrado2 = alumnos.find((alumno)=>{
    return alumno.nombre.includes("ed")})

    console.log(alumnoEncontrado2)
