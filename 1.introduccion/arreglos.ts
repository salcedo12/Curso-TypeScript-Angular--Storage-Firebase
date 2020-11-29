interface Alumnos{
    nombre:string,
    edad:number;
}

var listadoDeNombres:Array<string>=["Juana","Maria", "Ana", "Carmen"];

var listadoDeNumeros: Array<number>=[15,23,34,676,32];

var listadoDeAlumnos: Array<Alumnos>=[
    {
        nombre:"Eduardo",
        edad:23
    },
    {
        nombre: "Alex",
        edad:8
    },
    {
        nombre:"maria",
        edad:34
    }
]

console.log(listadoDeAlumnos)