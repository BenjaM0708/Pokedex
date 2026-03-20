//Call all pokemon data

const responseData = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
const dataTest = await responseData.json();
console.log(dataTest);

//Global Variables

const pokeArrayData = [];
let rangePageNum = 0;

// Next Pokemon Page Function

const cardsContainer = document.getElementById("cards-container");
cardsContainer.innerHTML = "";

const nextPageButtom = async () => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${rangePageNum}&limit=20`);
    const dataNextPage = await response.json();
    const pokemonBasicArray = dataNextPage.results;
    
    for(let element of pokemonBasicArray){

        const namePokemon = element.name;
        const pokemonDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
        const pokemonData = await pokemonDataResponse.json(); //Pokemon Data Container - This Object has all information about a specific pokemon
        
        //Map for Abilities and Types

        const abilitiesPokemonObject = pokemonData.abilities.map(
            abilityPokemon => abilityPokemon.ability.name
        );
        
        const typesPokemonObject = pokemonData.types.map(
            typePokemon => `${typePokemon.type.name.toUpperCase()}${typePokemon.type.name.slice(1)}`
        );

        // Object Construction

        const objectPokemon = {
            //thumbnail: 'Media/016.png',
            id: `${pokemonData.id}`,
            name: pokemonData.name,
            type: typesPokemonObject,
            //description: 'A tough rock-bodied Pokémon that releases toxic minerals from its body when threatened.',
            height: `${pokemonData.height} m`,
            weight: `${pokemonData.weight} kg`,
            ability: abilitiesPokemonObject,
            //habitat: 
        };

        pokeArrayData.push(`${namePokemon[0].toUpperCase()}${namePokemon.slice(1)} has a weight of ${weightPokemon}kg`);

    }
rangePageNum += 20;
}
