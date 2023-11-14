import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 5
let newSeg = 0

const snakeBody = [
    {x:11, y:11},
    

]


export function update(){
    addSeg()
    const inputDirection = getInputDirection()
    for(let i = snakeBody.length -2 ; i >= 0 ; i --){
        snakeBody[i +1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y 
}



export function drow(gameBoard){
    snakeBody.forEach(segment => {
        const snackElement = document.createElement('div')
        snackElement.style.gridRowStart = segment.y
        snackElement.style.gridColumnStart = segment.x
        snackElement.classList.add('snake')
        gameBoard.appendChild(snackElement)
    })
}


export function onSnake(position){
    return snakeBody.some(segment => {
        return equalPosition(segment,position)
    })
}


export function expandSnake(amount){
    newSeg += amount
}

function equalPosition(pos1,pos2){
    return(
        pos1.x === pos2.x && pos1.y === pos2.y
    )
}


function addSeg(){
    for(let i =0; i < newSeg;i++){
        snakeBody.push({...snakeBody[snakeBody.length -1]})
    }

    newSeg = 0
}