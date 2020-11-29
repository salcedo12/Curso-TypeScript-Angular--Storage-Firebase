interface Usuario{
    nombre:string,
    apellido: string
}

var listadoDeUsuarios: Array<Usuario> = [
    {
        nombre: 'Ana',
        apellido:'carmelo'
    },
    {
        nombre:'lupita',
        apellido:'perez'
    },
    {
        nombre:'Helmer',
        apellido:'Aya'
    }
]

for (let posicion in listadoDeUsuarios){
    console.log(listadoDeUsuarios[posicion].nombre)
}