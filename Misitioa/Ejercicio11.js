function Persona(nombre,edad,genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero= genero;
    this.obtdetalles =function () {
        console.log ("nombre"+ this.nombre + "edad" + this.edad + "genero" + this.genero);}
}
function estudiantes(curso, grupo){
    this.base= Persona;
    this.base(nombre, edad, genero);
    this.curso= curso;
    this.grupo= grupo;
    this.registrar=function (Persona)
    {
    console.log("curso" + this.curso + "grupo" + this.grupo);
    }
}
estudiantes.prototype=new Persona;

function Profesor (asignar, nivel)
{
    this.base=Persona;
    this.base(nombre,edad,genero);
    this.asignar= asignatura;
    this.nivel= nivel;
    this.asignar=function (Persona)
     {
    console.log("asignar" + this.asignar + "nivel" + this.nivel);
    }
}

Profesor.prototype= new Persona;
var pers = new Persona (Mikel, 19, varon)
var estud = new estudiantes (Olaia, 23, mujer, 1 psico,4)
var ira= new Profesor (Marken, 34, varon, 1 psico, 4, psicoanalisis, 4)
pers.obtdetalles();
estud.obtdetalles();
ira.obtdetalles();
estud.registrar();
ira.asignar();
