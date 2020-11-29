var alumno = /** @class */ (function () {
    function alumno() {
    }
    alumno.prototype.mostrarMensaje = function () {
        console.log("HOla ", this.nombre + " " + this.apellido);
    };
    alumno.prototype.asignar = function (nombreParametro, apellidoParametro, pesoParametro) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
    };
    return alumno;
}());
var Alumno1 = new alumno();
Alumno1.asignar('Eduardo', 'salcedo', 32);
Alumno1.mostrarMensaje;
var Alumno2 = new alumno();
Alumno2.asignar('Camila', 'salcedo', 32);
Alumno2.mostrarMensaje;
