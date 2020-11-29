var cantidadDeNumerosEnviados = 50;
switch (cantidadDeNumerosEnviados) {
    case 25: {
        console.log("Son veinte y cinco");
        break;
    }
    case 20: {
        console.log("Son veinte");
        break;
    }
    case 15: {
        console.log("Son quince");
        break;
    }
    default: {
        console.log("No se cumplio ninguna expresion");
    }
}
var tipoMenu;
(function (tipoMenu) {
    tipoMenu[tipoMenu["canciones"] = 1] = "canciones";
    tipoMenu[tipoMenu["albums"] = 2] = "albums";
    tipoMenu[tipoMenu["perfil"] = 3] = "perfil";
})(tipoMenu || (tipoMenu = {}));
var menu = 1;
switch (menu) {
    case tipoMenu.canciones: {
        console.log("Accede a las canciones");
        break;
    }
    case tipoMenu.albums: {
        console.log("Accede a las albums");
        break;
    }
    case tipoMenu.perfil: {
        console.log("Accede al perfil");
        break;
    }
    default: {
        console.log("la opcion no existe");
    }
}
