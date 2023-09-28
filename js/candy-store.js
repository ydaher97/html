function getCandy(candyStore, id) {
    const candy = candyStore.candies.find(candy => candy.id === id);
    return candy;
  }

  
  function getPrice(candyStore, id) {
    const candy = candyStore.candies.find(candy => candy.id === id);
    return candy ? candy.price : null;
  }
  function addCandy(candyStore, id, name, price) {
    const newCandy = {
      name,
      id,
      price,
      amount: 1
    };
    candyStore.candies.push(newCandy);
  }
    

  function buy(candyStore, id) {
    const candy = candyStore.candies.find(candy => candy.id === id);
    if (candy && candy.amount > 0) {
      candyStore.cashRegister += candy.price;
      candy.amount--;
    }
  }



  const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
    }

  
const candy = getCandy(candyStore, 'as12f');
console.log(candy);

const candyPrice = getPrice(candyStore, 'as12f');
console.log('Price:', candyPrice);

addCandy(candyStore, 'newCandyId', 'New Candy', 3);
console.log(candyStore.candies);

buy(candyStore, '5hd7y');
console.log(candyStore);
