const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function arraysSameValues(arr1, arr2) {
 
  const sortedArr1 = arr1.sort();
  const sortedArr2 = arr2.sort();

  if (sortedArr1.length !== sortedArr2.length) {
    return false;
  }

  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  return true;
}

const similar = arraysSameValues(food1, food2);
console.log(similar);
