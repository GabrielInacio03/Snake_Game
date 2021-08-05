
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //Renderiza em 2D
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

//definindo forma
function criarBG(){
    context.fillStyle = "lightgreen"; //background
    context.fillRect(0, 0, 16 * box, 16 * box); //desenhando nosso retangulo: x, y, altura, largura;
}

//criando o objeto(cobra) - Array de coordenadas
function criarCobrinha(){
    for(i=0; i<snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();


