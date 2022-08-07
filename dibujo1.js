var txt_l = document.getElementById("text_lineas");
var bot = document.getElementById("boton");
var color_linea = document.getElementById("colorcito");
boton.addEventListener("click", dibujarporclick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujarlinea(color_linea, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color_linea;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarporclick()
{
  lienzo.clearRect(0,0,300,300);
  var lineas = parseInt(txt_l.value);
  var col = color_linea.value;
  var l = 0;
  var yi, xf;
  var espacio = ancho / lineas;

  while(l < lineas)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarlinea(col, 0, yi, xf, 300);
    console.log("linea " + 1);
    l = l + 1;
  }

  dibujarlinea(col, 1, 1, 1, 299);
  dibujarlinea(col, 1, 299, 299, 299);

  alert("¿Estás seguro que quieres dibujar " + txt_l.value + " líneas?")

}
