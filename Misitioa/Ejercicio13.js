var date= /^(\w+\s+)*\d{2}\/\d{2}\/\d{2,4}(\s+\w+)*$/;
var texto="Naci en 35/04/1982 en donostia";
var fecha= date.test(texto);
console.log(fecha);
var email= /^\[a-zA-Z]+(\w([a-zA-Z][0-9])*@\w([a-zA-Z][0-9])*$\.\w([a-zA-Z]){1,3}$/;
var mimail="mikgalpar@gmail.com";
var mail = date.test(mimail);
console.log(mail);
