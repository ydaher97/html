const people = ["Greg", "Mary", "Devon", "James"];

//  Remove Greg
people.shift();

//  Remove James 
people.pop();

// Add Matt to the front
people.unshift("Matt");

// Add your name to the end 
people.push("yazeed");

const copyOfPeople = people.slice(2);

const indexOfMary = people.indexOf("Mary");

const indexOfFoo = people.indexOf("Foo");

people.splice(2, 1, "Elizabeth", "Artie");

const withBob = people.concat("Bob");

console.log(people);
console.log(copyOfPeople);
console.log(indexOfMary);
console.log(indexOfFoo);
console.log(withBob);
