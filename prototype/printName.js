const obj = {
    name: 'yazeed',
    print: function(){
        return `my name is ${this.name}`
    },
    printLate: function(){
        function Print() {
            console.log(this.name);
          }
          setTimeout(Print.bind(this), 1000);
    }
}

console.log(obj.print())

obj.printLate();