const words = ["asdasd","asdasdas","asdasdad","asdasdasdasd","sad"];
const wordsLen = []

for(let i=0 ; i < words.length;i++){
     wordsLen[i] = words[i].length
}

const wordsLen2 = words.map(word => word.length);

console.log(wordsLen)
console.log(wordsLen2)


