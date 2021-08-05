
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //Renderiza em 2D
let box = 32;
let snake = [];
let direction = "right";

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

//iniciação
function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box; 
    if(direction == "up") snakeY += box;
    if(direction == "down") snakeY -= box;


    //retirando ultimo elemento do array
    snake.pop();
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}
let jogo = setInterval(iniciarJogo, 100);



