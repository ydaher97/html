const nums = [2,5,66,54,34,23]

const filternums = nums.filter((num) => {
    return num > 40
})

console.log(filternums)


// const numRows = 2;
// const numCols = 12;
// let playerPositions = Array(numRows).fill(0);

// const movePlayer = (playerIndex) => {
//   const playerRow = document.getElementById(`player${playerIndex + 1}-race`).children[0];
//   const currentPosition = playerPositions[playerIndex];

//   playerRow.children[currentPosition].classList.remove('active');

//   playerPositions[playerIndex] = Math.min(currentPosition + 1, numCols - 1);

//   playerRow.children[playerPositions[playerIndex]].classList.add('active');

//   if (playerPositions[playerIndex] === numCols - 1) {
//     announceWinner(playerIndex);
//   }
// };

// const announceWinner = (playerIndex) => {
//   alert(`Player ${playerIndex + 1} wins the race!`);
// };

// const restartGame = () => {
//   playerPositions = Array(numRows).fill(0);
//   const cells = document.querySelectorAll('.racer-table .active');
//   cells.forEach(cell => cell.classList.remove('active'));
//   document.getElementById('player1-race').children[0].firstElementChild.classList.add('active');
//   document.getElementById('player2-race').children[0].firstElementChild.classList.add('active');
// };

// document.addEventListener('keyup', (event) => {
//   if (event.key === 'ArrowRight') {
//     movePlayer(0); 
//     console.log('event.key', event.key)
//   } else if (event.key === 'd' || event.key === 'D') {
//     movePlayer(1); 
//     console.log('event.key', event.key)

//   } else if (event.key === 'r' || event.key === 'R') {
//     restartGame(); 
// }});

// document.getElementById('player1-race').children[0].firstElementChild.classList.add('active');
// document.getElementById('player2-race').children[0].firstElementChild.classList.add('active');

