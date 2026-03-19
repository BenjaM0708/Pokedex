//Call all pokemon data

const responseData = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
const dataTest = await responseData.json();
console.log(dataTest);

//Global Variables

const pokeArrayData = [];
let dataNextPage = "init";
let rangePageNum = 0;

// Next Pokemon Page

const cardsContainer = document.getElementById("cards-container");
cardsContainer.innerHTML = "";

do {

const responseTestWhile = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${rangePageNum}&limit=20`);
dataNextPage = await responseTestWhile.json();

const pokemonArray = dataNextPage.results;

for(let element of pokemonArray){
const namePokemon = element.name;

const pokemonDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
const pokemonData = await pokemonDataResponse.json();

const weightPokemon = pokemonData.weight;
pokeArrayData.push(`${namePokemon[0].toUpperCase()}${namePokemon.slice(1)} has a weight of ${weightPokemon}kg`);
}//Fin del for

rangePageNum += 20;
} while(dataNextPage.next !== null);

console.log(pokeArrayData);