function Pokemon(pokemonName, pokemonType,
    pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }


const poke1 = new Pokemon('pica','fire',['blast','throw'])
const poke2 = new Pokemon('charizar','fire',['blast','throw'])
const poke3 = new Pokemon('dsad','water',['blast','throw'])


Pokemon.prototype.callPokemon = function(){
    return `i choose you ${this.name}`
}

Pokemon.prototype.attack = function(attackNum){
    return `${this.name} used ${this.attackList[attackNum]}`
}

console.log(poke1.callPokemon())
console.log(poke2.callPokemon())
console.log(poke3.callPokemon())


console.log(poke1.attack(1))
console.log(poke2.attack(1))
console.log(poke3.attack(0))