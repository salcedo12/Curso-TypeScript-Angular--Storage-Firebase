class alumno{
    nombre:string;
    apellido:string;
    peso:number;


    mostrarMensaje(){
        console.log("HOla ", this.nombre + " " + this.apellido)
    }

    asignar(nombreParametro:string, apellidoParametro: string, pesoParametro:number){
        this.nombre =nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
    }
} 

var Alumno1 : alumno = new alumno();
Alumno1.asignar('Eduardo','salcedo', 32)
Alumno1.mostrarMensaje;


var Alumno2 : alumno = new alumno();
Alumno2.asignar('Camila','salcedo', 32)
Alumno2.mostrarMensaje;