function calcAverage (arr){
    let sum =0;
    for ( let i = 0 ; i < arr.length; i++ ){
        sum = sum + arr[i];
    } return sum/arr.length ;
    }
  console.log( calcAverage([ 85 , 90 , 92 ]) ) ;