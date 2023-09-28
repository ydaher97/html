// function doubleValues(arr) {
//     return arr.map((val) => {
//       return val * 2;
//     });
//   }
// const array = [5,4,3,2,1]

// console.log(doubleValues(array))

/********************/ 
// function onlyEvenValues(arr){
//     const newArr = []
//     arr.forEach(element => {
//         if(element % 2 == 0){
//             newArr.push(element)
//         }
//     });
//     return newArr
// }

// console.log(onlyEvenValues(array))


/*********************/ 

// const showFirstAndLast = (arr) => {
//     const Arr = arr.filter((item) => typeof item === 'string');
//     return [Arr[0], Arr[Arr.length - 1]];
//   };
  
//   const exampl = [3, 'hello', true, 42, 'world', null];
//   const result = showFirstAndLast(exampl);
//   console.log(result); 

/**************************** */


//   const vowelCount = (str) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const count = {};
  
//     str.toLowerCase().split('').forEach((char) => {
//       if (vowels.includes(char)) {
//         count[char] = (count[char] || 0) + 1;
//       }
//     });
  
//     return count;
//   };
  
//   const example = 'hello world';
//   const result = vowelCount(example);
//   console.log(result); 
  /** */


//   const capitalize = (str) => {
//     return str.replace(/\b\w/g, (match) => match.toUpperCase());
//   };
  
//   const exampleString = 'capitalize the first letter of each word';
//   const result = capitalize(exampleString);
//   console.log(result);

 /** */

//   const shiftLetters = (str) => {
//     const shiftedStr = str.replace(/[a-zA-Z]/g, (char) => {
//       if (char >= 'a' && char < 'z') {
//         return String.fromCharCode(char.charCodeAt(0) + 1);
//       }
//       else if (char === 'z') {
//         return 'a';
//       }
//       else if (char >= 'A' && char < 'Z') {
//         return String.fromCharCode(char.charCodeAt(0) + 1);
//       }
//       else if (char === 'Z') {
//         return 'A';
//       }
//       return char;
//     });
  
//     return shiftedStr;
//   };
  
//   const example = 'Hello, World!';
//   const shifted = shiftLetters(example);
//   console.log(shifted);


/************************************** */

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  
  const swapCase = (str) => {
    const words = str.split(' ');
    const result = words.map((word, index) => {
      return index % 2 === 0 ? word : capitalize(word);
    });
    return result.join(' ');
  };
  
  const exampleString = 'this is a test sentence';
  const swappedString = swapCase(exampleString);
  console.log(swappedString);