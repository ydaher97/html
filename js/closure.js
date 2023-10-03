var b = 1;
function someFunction(number) {
function otherFunction(input) {
return b;
}

 return otherFunction;
console.log(otherFunction)
b =5
}
var firstResult = someFunction(9);
var result = firstResult(2);

console.log(firstResult(2))