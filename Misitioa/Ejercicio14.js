var numero = document.getElementsByTagName("a");
    console.log (numero.length);
var dir =numero.item (numero.length -2);
    console.log (dir);
var contar=0
 for (var i=0; i<numero.length; i++){
        if (numero[i].href = "http://prueba"){
            contar++;}
     }
 console.log (contar);

