function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}


Square.prototype.isSquare = function(){
    return (this.a === this.b && this.b === this.c && this.c === this.d);
}


const mySquare = new Square(5, 5, 5, 5);
console.log(mySquare.isSquare())