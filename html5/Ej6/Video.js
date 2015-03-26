window.onload= function(){
    "use strict"

    var hasi = $("#iniciar");
    var empezar = function(){
        var bideoa= $("#video").get(0);
        bideoa.play();
    }
    var glditu= $("#Pausa");
    var pausa =function() {
        var geldiunea= $("#video").get(0);
        geldiunea.pause();
    }
    var paratu= $("#Parar");
    var pausatu =function() {
        var geldiunea= $("#video").get(0);
        geldiunea.pause();
        geldiunea.load();
    }
    hasi.on("click",empezar);
    glditu.on("click",pausa);
    pausatu.on("click",pausatu);
}

