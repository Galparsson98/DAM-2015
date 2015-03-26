var izena= /^\b[A-Z]\w[a-z]$/;
var abiz= /^\b[A-Z]\w[a-z]$/;
var imaila= /^\[a-zA-Z]+(\w([a-zA-Z][0-9])*@\w([a-zA-Z][0-9])*\.\w([a-zA-Z]){1,3}$/;
var passwd= /^[a-zA-z][0-9]$/;
var passwd = document.getElementById("password");
passwd.setAttribute("type", "password");
passwd.minlength(6);
