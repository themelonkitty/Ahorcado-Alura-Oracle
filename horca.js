/*Dibuja la horca */

function dibujarHorca(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5FC";
    tablero.strokeStyle = "#0A3871";

    tablero.fillRect(0,0,800,400);
    tablero.beginPath();
    tablero.moveTo(280,250);
    tablero.lineTo(430,250);
    tablero.stroke();
    tablero.closePath();

    tablero.moveTo(355,250);
    tablero.lineTo(355,30);
    tablero.stroke();
    tablero.closePath();

    tablero.moveTo(355,30);
    tablero.lineTo(475,30);
    tablero.stroke();
    tablero.closePath();

    tablero.moveTo(475,30);
    tablero.lineTo(475,45);
    tablero.stroke();
    tablero.closePath();
}

/*Dibuja cada espacio de la letra sorteada */
function dibujarEspaciosLetra(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5FC";
    tablero.strokeStyle = "#0A3871";

    let ancho = 750/palabraSecreta.length;
    for (let i=0 ; i < palabraSecreta.length; i++){
        tablero.moveTo(50+(ancho*i), 350)
        tablero.lineTo(100+(ancho*i), 350)
    }
    tablero.stroke();
    tablero.closePath();
}

function dibujarCabezaAhorcado(){

    tablero.beginPath();
    tablero.arc(475, 70, 20, 0, 2 * Math.PI);
    tablero.stroke();

}

function dibujarCuerpoAhorcado(){
    tablero.moveTo(475,90);
    tablero.lineTo(475,180);
    tablero.stroke();
    tablero.closePath();
}

function dibujarBrazoUno(){
    tablero.moveTo(475,110);
    tablero.lineTo(510,80);
    tablero.stroke();
    tablero.closePath();
}

function dibujarBrazoDos(){
    tablero.moveTo(475,110);
    tablero.lineTo(440,80);
    tablero.stroke();
    tablero.closePath(); 
}

function dibujarPiernaUno(){
    tablero.moveTo(475,180);
    tablero.lineTo(510,210);
    tablero.stroke();
    tablero.closePath(); 
}

function dibujarPiernaDos(){
    tablero.moveTo(475,180);
    tablero.lineTo(440,210);
    tablero.stroke();
    tablero.closePath(); 
}