// console.log(this)


// const myObj = {
//     name: "Timmy",
//     greet: function() {
//       console.log(`Hello ${this.name}`);
//     },
//   };
  
//   myObj.greet();



//   const myFuncDec = function () {
//     console.log(this);
//     };

//     // myFuncDec();

//     const myFuncArrow = () => {
//         console.log(this);
//         };


//  myFuncArrow();

const storm = {
    superPower: "flying",
  };
  
  function printSuperPower() {
    console.log("my superpower is " + this.superPower);
  }
  
  printSuperPower.call(storm);
  