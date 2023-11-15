const hero = {
    health: 5,
    power: 68,
    getStrength: function(){
        if (this.health <= 5){
            return this.power - 10;
        } else return this.power;
    }
}

function whoIsStronger(getStrength){
    const myStrength = 50;
    if (getStrength() < myStrength){
        return "I am stronger";
    } else return "You are stronger";
}

const strength = hero.getStrength.bind(hero);
console.log(whoIsStronger(strength)); 
