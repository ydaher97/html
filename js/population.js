function percentageOfWorld1(population) {
    const worldPopulation = 7900; 
    const percentage = (population / worldPopulation) * 100;
    return percentage;
  }
  
  const chinaPopulation = 1441; 
  const indiaPopulation = 1393; 
  const usPopulation = 331; 
  
  const percentageChina1 = percentageOfWorld1(chinaPopulation);
  const percentageIndia1 = percentageOfWorld1(indiaPopulation);
  const percentageUS1 = percentageOfWorld1(usPopulation);
  
  console.log(`China ${percentageChina1.toFixed(1)}%`);
  console.log(`India ${percentageIndia1.toFixed(1)}%`);
  console.log(`the US ${percentageUS1.toFixed(1)}%`);
  

  const percentageOfWorld2 = function(population) {
    const worldPopulation = 7900; 
    const percentage = (population / worldPopulation) * 100;
    return percentage;
  };
  
  const percentageChina2 = percentageOfWorld2(chinaPopulation);
  const percentageIndia2 = percentageOfWorld2(indiaPopulation);
  const percentageUS2 = percentageOfWorld2(usPopulation);
  
  console.log(` China ${percentageChina2.toFixed(1)}`);
  console.log(` India ${percentageIndia2.toFixed(1)}`);
  console.log(` the US ${percentageUS2.toFixed(1)}`);