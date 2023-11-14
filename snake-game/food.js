import { onSnake ,expandSnake} from "./snake.js"

let food = {x:7 , y: 6}
const EXPANTION_RATE = 1

export function update(){
    if(onSnake(food)){
        expandSnake(EXPANTION_RATE)
        food = { x: 3 , y:8}
    }
}



export function drow(gameBoard){
    
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
    
}