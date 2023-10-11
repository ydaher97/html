

document.addEventListener('keyup', (event) => {
   
  
    const player1Car = document.querySelector('#player1-race .active');
    const player2Car = document.querySelector('#player2-race .active');
  
    if (event.key === 'd' || event.key === 'D') {
      moveCar(player1Car);
    } else if (event.key === 'l' || event.key === 'L') {
      moveCar(player2Car);
    }
  });
  
  function moveCar(carElement) {
    const nextCell = carElement.nextElementSibling;
    console.log( nextCell)
    if (nextCell && !nextCell.classList.contains('finish')) {
      carElement.classList.remove('active');
      nextCell.classList.add('active');
    }
  }