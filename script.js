/*Creo mi lista con las palabras que pueden salir sorteadas en el juego y crear variable de palabra secreta que se escogerá postariormente*/
let palabras = [
  "GATITA",
  "DULCE",
  "PURPURA",
  "MIRADA",
  "CALENDARIO",
  "GEOMETRIA",
  "MEGALOMANIACO",
];
let palabraSecreta = "";
/*Creo la función que escogerá la palabra secreta de mi lista y la signo a la variable anterior*/
function escogerPalabraSecreta() {
  palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
  console.log(palabraSecreta);
}

/* Hago de los botones de iniciar, nueva palabra y el footer una letiable que hace referencia a su HTML */
let piedepagina = document.getElementById("footer");
let botoniniciar = document.getElementById("botonIniciarJuego");
let botonnuevapalabra = document.getElementById("botonNuevaPalabra");
/* Agrego variables para los botones de nuevo juego, desistir y los mantengo no visibles. 
Hago la variable tablero para dibujar en horca.js y mantengo todo su cuadro invisible con tableroDeJuego*/
let nuevojuego = document.getElementById("nuevoJuego");
nuevojuego.style.display = "none";
let desistir = document.getElementById("desistir");
desistir.style.display = "none";
let tablero = document.getElementById("horca").getContext("2d");
document.getElementById("tableroDeJuego");
tableroDeJuego.style.display = "none";
let cuadroTexto = document.getElementById("cuadrotexto");
cuadroTexto.style.display = "none";
/* Creo y oculto los botones para agregar palabra  */
let agregarPalabra = document.getElementById("agregarPalabra");
agregarPalabra.style.display = "none";
let cancelar = document.getElementById("cancelar");
cancelar.style.display = "none";

/* Creo la funcion hideMenuAgregarPalaraeIniciar para esconder los elementos del menú de agregar palabra, y la funcion addPalabraTexto añade la palabra del cuadro de texto al array de donde se escogerá la palabra secreta, ademas ejecuta la funcion ya mencionada y también esconde los botones de inicio.  */
agregarPalabra.addEventListener("click", addPalabraTexto);
function addPalabraTexto() {
  let palabratexto = document.querySelector(".cuadrotexto").value;
  palabratexto = palabratexto.toUpperCase();
  palabras.push(palabratexto);
  document.querySelector(".cuadrotexto").value = "";
  hideMenuAgregarPalabraeIniciar();
  hideBotonIniciar();
}

function hideMenuAgregarPalabraeIniciar() {
  cuadroTexto.style.display = "none";
  agregarPalabra.style.display = "none";
  cancelar.style.display = "none";
}

/* La función "hideBotonIniciar va a ocultar el los botones de inicio,
también va a hacer visibles los botones del tablero de juego, el tablero, sorteara una palabra secreta y dibujará la horca y los espacios de cada letra, y comenzará el juego resetenado las variables como vidas, historial, etc a 0 */
function hideBotonIniciar() {
  document.getElementById("botonIniciarJuego").style.display = "none";
  document.getElementById("botonNuevaPalabra").style.display = "none";
  nuevojuego.style.display = "block";
  desistir.style.display = "block";
  tableroDeJuego.style.display = "block";
  escogerPalabraSecreta();
  dibujarHorca();
  dibujarEspaciosLetra();
  vidas = 0;
  historial = [];
  historialletrascorrectas = [];
  victoria = 0;
  window.addEventListener("keydown", terminarJuego, true);
}

/* Creo un evento donde el click hará que se ejecute la funcion "hideBotonIniciar" */
botoniniciar.addEventListener("click", hideBotonIniciar);

/* Creo un evento donde el click al botón Nueva Juego hace que el tablero se reinicie */
nuevojuego.addEventListener("click", hideBotonIniciar);

/*La funcion hideAgregarPalabra va a esconder el menu de agregar palabra y mostrar los botones de inicio */

function hideAgregarPalabra() {
  cuadroTexto.style.display = "none";
  agregarPalabra.style.display = "none";
  cancelar.style.display = "none";
  botoniniciar.style.display = "block";
  botonnuevapalabra.style.display = "block";
}

/* Creo un evento donde el click al cancelar en la pantalla de agregar palabra hará que se ejecute la funcion "hideAgregarPalabra" */
cancelar.addEventListener("click", hideAgregarPalabra);

/* La función "showBotonIniciar va a mostrar los botones de inicio, y terminará el juego con el removeEventListener, las variables se reiniciarán*/
function showBotonIniciar() {
  document.getElementById("botonIniciarJuego").style.display = "block";
  document.getElementById("botonNuevaPalabra").style.display = "block";
  nuevojuego.style.display = "none";
  desistir.style.display = "none";
  tableroDeJuego.style.display = "none";
  vidas = 0;
  historial = [];
  historialletrascorrectas = [];
  victoria = 0;
  window.removeEventListener("keydown", terminarJuego, true);
}

/* Creo un evento donde el click hará que se ejecute la funcion "showBotonIniciar" */
desistir.addEventListener("click", showBotonIniciar);

/* La función va a ocultar los botones de inicio y mostrar el menu de nueva palabra */
function showAgregarPalabra() {
  cuadroTexto.style.display = "block";
  agregarPalabra.style.display = "block";
  cancelar.style.display = "block";
  botoniniciar.style.display = "none";
  botonnuevapalabra.style.display = "none";
}

/* Creo un evento donde el click hará que se ejecute la funcion showAgregarPalabra*/
botonnuevapalabra.addEventListener("click", showAgregarPalabra);

/* Creo un evento donde el click al botón nueva palabra hace que aparezca el menu de nueva palabra */
botonnuevapalabra.addEventListener("click", showAgregarPalabra);

/* La función va a evitar que el programa reconozca teclas de mando al jugar */
function omitirflechas(flecha) {
  if (
    flecha == "ARROWRIGHT" ||
    flecha == "ARROWUP" ||
    flecha == "ARROWDOWN" ||
    flecha == "ARROWLEFT" ||
    flecha == "ENTER" ||
    flecha == "BACKSPACE" ||
    flecha == "SHIFT" ||
    flecha == "CAPSLOCK" ||
    flecha == "TAB" ||
    flecha == "CONTROL" ||
    flecha == "ALT" ||
    flecha == "ESCAPE" ||
    flecha == "NUMLOCK" ||
    flecha == "META" ||
    flecha == "DEAD" ||
    flecha == "DELETE" ||
    flecha == "HOME" ||
    flecha == "END" ||
    flecha == "PAGEUP" ||
    flecha == "PAGEDOWN"
  ) {
    return false;
  } else if (/^[A-Z\u00D1]+$/.test(flecha)) {
    return true;
  } else {
    return false;
  }
}

/*Obtiene la letra presionada por el usuario, la hace mayuscula y verifica que solo sean letras, si es así, crea un array con la palabra secreta y verifica las victorias y las vidas. Si la tecla presionada no esta incluida en el historial, la escribe y la guarda en el historial. Si el historial tiene la misma longitud que el array de la palabra secreta, ganaste y suma una victoria. 
De lo contrario, si la tecla presionada no es correcta, la guarda en el historial de errores, y suma una vida por cada error, lo que va dibujando un miembro del ahorcado. Al llegar a seis, termina el juego.  */
let vidas = 0;
let victoria = 0;
historial = [];
historialletrascorrectas = [];

let terminarJuego = function obtenerTeclaPresionada(e) {
  let teclaPresionada = e.key;
  let contador = 0;
  teclaPresionada = teclaPresionada.toUpperCase();
  let soloLetras = omitirflechas(teclaPresionada);
  console.log(soloLetras);
  console.log(historial);
  if (soloLetras == true) {
    palabraDeletreada = palabraSecreta.split("");
    if (victoria == 1) {
      vidas = 6;
    }
    if (vidas == 6) {
      victoria = 1;
    } else {
      let ancho = 750 / palabraSecreta.length;
      if (!historialletrascorrectas.includes(teclaPresionada)) {
        for (let i = 0; i < palabraDeletreada.length; i++) {
          if (teclaPresionada == palabraDeletreada[i]) {
            tablero.font = "30px Inter";
            tablero.fillStyle = "red";
            tablero.textAlign = "center";
            tablero.fillText(teclaPresionada, 75 + ancho * i, 340);
            historialletrascorrectas.push(teclaPresionada);
            if (historialletrascorrectas.length == palabraDeletreada.length) {
              tablero.font = "20px Inter";
              tablero.fillStyle = "red";
              tablero.textAlign = "center";
              tablero.fillText("Felicidades, ganaste!", 200, 200);
              victoria = 1;
            }
          } else {
            contador++;
          }
        }
      }
      if (!historial.includes(teclaPresionada)) {
        if (contador == palabraSecreta.length) {
          historial.push(teclaPresionada);
          tablero.font = "20px Inter";
          tablero.fillStyle = "red";
          tablero.textAlign = "center";
          tablero.fillText(teclaPresionada, 20 + vidas * 30, 20);
          vidas++;
        }
        if (vidas == 6) {
          tablero.font = "20px Inter";
          tablero.fillStyle = "red";
          tablero.textAlign = "center";
          tablero.fillText("Fin del juego", 100, 60);
          dibujarPiernaDos();
        }
        if (vidas == 1) {
          dibujarCabezaAhorcado();
        }
        if (vidas == 2) {
          dibujarCuerpoAhorcado();
        }
        if (vidas == 3) {
          dibujarBrazoUno();
        }
        if (vidas == 4) {
          dibujarBrazoDos();
        }
        if (vidas == 5) {
          dibujarPiernaUno();
        }
      }
    }
  }
};

window.addEventListener("keydown", terminarJuego, true);
