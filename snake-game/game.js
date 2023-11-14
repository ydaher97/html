import { update as updateSnake , drow as drowSnake ,SNAKE_SPEED } from "./snake.js";
import { update as updateFood , drow as drowFood  } from "./food.js";


let lastRender = 0
const gameBoard = document.getElementById('game-board')

function main(currentTime){
    window.requestAnimationFrame(main)

    const secLastRender = (currentTime - lastRender)/1000;
    if(secLastRender < 1 / SNAKE_SPEED) return
    
    console.log('render')
    lastRender = currentTime


    update()

    draw()
}

window.requestAnimationFrame(main)


function update(){
    updateSnake()
    updateFood()
}

function draw(){
    gameBoard.innerHTML= ''
    drowSnake(gameBoard)
    drowFood(gameBoard)
}