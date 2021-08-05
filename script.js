
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //Renderiza em 2D
let box = 32;

//definindo forma
function criarBG(){
    context.fillStyle = "lightgreen"; //background
    context.fillRect(0, 0, 16 * box, 16 * box); //desenhando nosso retangulo: x, y, altura, largura;
}
criarBG();