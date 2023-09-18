const john = [89, 120 ,103];
const mike = [116, 94 ,123];
const mary = [97, 134 ,105];

function CalculateAverage(score){
    const average = score.reduce((a, b) => a + b, 0) / score.length;
    return average;
}

let johnAvg  = CalculateAverage(john);
let mikeAvg  = CalculateAverage(mike);
let maryAvg  = CalculateAverage(mary);

if(johnAvg > mikeAvg){
    console.log(`john team wins avg: ${johnAvg} mike avg ${mikeAvg} `)
}else if(mikeAvg > johnAvg){
    console.log(`mike team wins avg: ${mikeAvg} mike avg ${johnAvg} `)

}else{
    console.log("its a drow")
}