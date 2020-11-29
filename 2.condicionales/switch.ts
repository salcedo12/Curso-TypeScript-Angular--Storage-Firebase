var cantidadDeNumerosEnviados:number = 50;

switch(cantidadDeNumerosEnviados){
    case 25 :{
        console.log("Son veinte y cinco")
        break;
    }
    
    case 20 :{
        console.log("Son veinte")
        break;
    }
    
    case 15 :{
        console.log("Son quince")
        break;
    }
    default:{
        console.log("No se cumplio ninguna expresion")
    }
}


enum tipoMenu {
    canciones=1,
    albums =2,
    perfil=3
}

var menu:number=1

switch(menu){
    case tipoMenu.canciones:{
        console.log("Accede a las canciones")
        break;
    }
    case tipoMenu.albums:{
        console.log("Accede a las albums")
        break;
    }
    case tipoMenu.perfil:{
        console.log("Accede al perfil")
        break;
    }
    default:{
        console.log("la opcion no existe")
    }
}