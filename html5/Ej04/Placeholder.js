Modernizr.load({
  test: Modernizr.geolocation,
  yep : 'geo.js',
  nope: 'geo-polyfill.js'
});
Modernizr.load([
  // Presentational polyfills
  {
    // Logical list of things we would normally need
    test : Modernizr.fontface && Modernizr.canvas && Modernizr.cssgradients,
    // Modernizr.load loads css and javascript by default
    nope : ['presentational-polyfill.js', 'presentational.css']
  },
