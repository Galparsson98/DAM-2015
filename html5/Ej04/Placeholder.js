 window.onload = function (cargado){
   console.log (cargado);
   Modernizr.load({
  test:Modernizr.input.Placeholder,
     nope:"https://raw.githubusercontent.com/philipwalton/polyfill/master/dist/polyfill.min.js"})
    }
