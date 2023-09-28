const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ];
    

    const getAllNames = (data) => {
        return data.map((person) => person.name);
      };
      
      const names = getAllNames(data);
      console.log('All Names:', names);

      
      const getPeopleBornBefore1990 = (data) => {
        const bornBefore1990 = data.filter((person) => {
          const year = parseInt(person.birthday.split('-')[2]);
          return year < 1990;
        });
        return bornBefore1990;
      };
      
      const peopleBornBefore1990 = getPeopleBornBefore1990(data);
      console.log('People Born Before 1990:', peopleBornBefore1990);
      


      const getFoodFrequency = (data) => {
        const foodFrequency = {};
      
        data.forEach((person) => {
          Object.values(person.favoriteFoods).forEach((foodType) => {
            foodType.forEach((food) => {
              foodFrequency[food] = (foodFrequency[food] || 0) + 1;
            });
          });
        });
      
        return foodFrequency;
      };
      
      const foodFrequency = getFoodFrequency(data);
      console.log('Food Frequency:', foodFrequency);
      
