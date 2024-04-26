function mostrarPrevision() {
  var inChinchilas = document.getElementById("inChinchilas");
  var inAnhos = document.getElementById("inAnhos");
  var outRespuesta = document.getElementById("outRespuesta");

  var chinchilas = Number(inChinchilas.value);
  var anhos = Number(inAnhos.value);

  if (chinchilas < 2 || anhos == 0 || isNaN(chinchilas) || isNaN(anhos)) {
    alert("Numero invalido...");
    inChinchilas.focus();
    return;
  }

  
  var respuesta="";
 
  for (var i=1; i<= anhos; i++)
  {
    respuesta=respuesta+ i + "er Anho: " + chinchilas + " Chinchillas\n";
    chinchilas=chinchilas*3;
  }
  outRespuesta.textContent=respuesta;
}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click",mostrarPrevision);