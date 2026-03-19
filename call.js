//Call all pokemon data

const responseTest = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
const dataTest = await responseTest.json();
console.log(dataTest);
const arrayTest = [];

let dataTestWhile = "init";
let rangePageNum = 0;

do {

const responseTestWhile = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${rangePageNum}&limit=20`);
dataTestWhile = await responseTestWhile.json();

const pokemonArray = dataTestWhile.results;

for(let element of pokemonArray){
const namePokemon = element.name;

const pokemonDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
const pokemonData = await pokemonDataResponse.json();

const weightPokemon = pokemonData.weight;
arrayTest.push(`${namePokemon[0].toUpperCase()}${namePokemon.slice(1)} has a weight of ${weightPokemon}kg`);
}//Fin del for

rangePageNum += 20;
} while(dataTestWhile.next !== null);

console.log(arrayTest);