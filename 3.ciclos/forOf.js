var listadoDeUsuarios = [
    {
        nombre: 'Ana',
        apellido: 'carmelo'
    },
    {
        nombre: 'lupita',
        apellido: 'perez'
    },
    {
        nombre: 'Helmer',
        apellido: 'Aya'
    }
];
for (var _i = 0, listadoDeUsuarios_1 = listadoDeUsuarios; _i < listadoDeUsuarios_1.length; _i++) {
    var Usuario = listadoDeUsuarios_1[_i];
    console.log('Hola Bienvenido: ', Usuario.nombre);
    console.log('Nos alegra tenerte: ', Usuario.apellido);
}
