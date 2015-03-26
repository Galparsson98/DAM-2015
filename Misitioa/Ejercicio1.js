var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numero =48487510;
var let="k";

if (numero <0 || numero >99999999)
{
    alert("numero erroneo");
}

else
{
var resto= numero%23;
    var letracorrecta = let[resto];
    let= let.toUpperCase();
    if (let === letracorrecta)
    {
        alert ("numero y letra correcta");
    }
    else
    {
        alert ("numero y letra incorrecta");
    }
}
