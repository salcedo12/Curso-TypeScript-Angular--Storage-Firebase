var nombres: string[] = ["Ana", "Maria", "Andrea"]


nombres.forEach((nombre)=>{
    if(nombre =="Ana"){
        console.log("Hola Ana")
    }
}
)

interface Alumno{
    nombre: string;
    apellido:string;
}

var alumnos: Alumno[] = []

alumnos.push({nombre: "Ana", apellido: "Pineda"});

alumnos.push({nombre: "Eduardo", apellido: "salcedo"});

alumnos.push({nombre: "Maria", apellido: "Pineda"});

alumnos.forEach((alumno)=>{
    console.log(alumno.nombre)
})