function Boom(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 7 === 0 && String(i).includes('7')) {
        console.log('BOOM-BOOM');
      } else if (i % 7 === 0) {
        console.log('BOOM');
      } else {
        console.log(i);
      }
    }
  }
  
  Boom(18);
  