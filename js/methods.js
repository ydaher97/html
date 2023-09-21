const myCountry = {
    country: "israel",
    capital: "tel aviv",
    language: "hebrow",
    population: 8_000_000,
    neighbours: ["jordan", "lebanon", "syria"],
    describe: function () {
      console.log(
        `${this.country} has ${this.population} people  mother tongue  ${this.language} they have ${this.neighbours.length} neighbouring countries a capital  ${this.capital}.`
      );
    },
    checkIsland: function () {
      this.land = this.neighbours.length === 0 ? true : false;
    }
  };
  
  myCountry.describe();
  
 myCountry.checkIsland()
  
  console.log(myCountry.land);
  