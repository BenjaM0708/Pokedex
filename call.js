//Call all pokemon data

const responseData = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
const dataTest = await responseData.json();
console.log(dataTest);

//Global Variables

const pokeArrayData = [];
let rangePageNum = 0;

//Pokemon Array Builder

//const pokeArrayBuilder = async () => {  BORRAR SIGNOS DE COMENTARIO LUEGO!!!!!!!!!!!!!!

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${rangePageNum}&limit=20`);
    //const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`); All pokemons in just one fetch
    const dataNextPage = await response.json();
    const pokemonBasicArray = dataNextPage.results;
    
    for(let element of pokemonBasicArray){
        
        const pokemonDataResponse = await fetch(element.url);
        const pokemonData = await pokemonDataResponse.json(); //Pokemon Data Container - This Object has all information about a specific pokemon. Remember that is a Iteration, so it's doing this kind of array for each pokemon
        
        //Map for Abilities and Types - Both are arrays

        const abilitiesPokemonArray = pokemonData.abilities.map(
            abilityPokemon => `${abilityPokemon.ability.name[0].toUpperCase()}${abilityPokemon.ability.name.slice(1)}`
        );

        const typesPokemonArray = pokemonData.types.map(
            typePokemon => `${typePokemon.type.name[0].toUpperCase()}${typePokemon.type.name.slice(1)}`
        );

        //Habitat and Description 

        const pokemonSpeciesResponse = await fetch(pokemonData.species.url);
        const pokemonSpeciesArray = await pokemonSpeciesResponse.json(); // Endpoint to pokemon-species

        const pokeHabitat = pokemonSpeciesArray.habitat.name ? `${pokemonSpeciesArray.habitat.name[0].toUpperCase()}${pokemonSpeciesArray.habitat.name.slice(1)}` : `Unknown`;
        const pokeDescription = pokemonSpeciesArray.flavor_text_entries.find(description => description.language.name === "en" );
        const clearDescription =pokeDescription.flavor_text.replace(/[\n\f\r\s+]/g, " ").replace(/pokémon/gi, "pokemon").trim();
  
        // Object Construction

        const objectPokemon = {
            thumbnail: pokemonData.sprites.front_default, 
            id: pokemonData.id, 
            name: `${pokemonData.name[0].toUpperCase()}${pokemonData.name.slice(1)}`, 
            type: typesPokemonArray,
            description: clearDescription,
            height: `${pokemonData.height} m`,
            weight: `${pokemonData.weight} kg`,
            ability: abilitiesPokemonArray,
            habitat: pokeHabitat
        }; console.log(objectPokemon);

        pokeArrayData.push(objectPokemon);
      
    }
//}                          BORRAR SIGNOS DE COMENTARIO LUEGO!!!!!!!!!!!!!!
console.log(pokeArrayData);
//Next Pokemon Page Function

/*const cardsContainer = document.getElementById("cards-container");
const nextButton = document.getElementById('next-button');

const nextPageButtom =  () => {

    rangePageNum += 20;
    cardsContainer.innerHTML = "";
    //Call generateFunction - This function is using the array that "pokeArrayBuilder" does how a callback function
}*/
