function Persona(nombre,edad){
    this.nombre = nombre || "";
    this.edad = edad || "";
}
function estudiantes(curso, grupo){
    this.curso= curso || "";
    this.grupo= grupo || "";
    this.registrar=function (Persona)
    {
    console.log();
    }
}
estudiantes.prototype=new persona;

function Profesor (asignar, nivel) {
    this.asignar= asignatura || "";
    this.nivel || "";
    this.asignar=function (Persona)
     {
    console.log();
    }
}

Profesor.prototype= new persona;
