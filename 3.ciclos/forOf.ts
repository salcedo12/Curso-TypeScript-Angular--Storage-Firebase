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


for(let Usuario of listadoDeUsuarios){
    console.log('Hola Bienvenido: ', Usuario.nombre);
    console.log('Nos alegra tenerte: ', Usuario.apellido);
    
}