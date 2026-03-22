//Globals Variables

const cardsContainer = document.getElementById("cards-container");
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const pokeArrayData = [];
let rangePageNum = 0;
let moveNextLimit = 'init';
let movePrevLimit = null;

//Pokemon Array Builder

if(rangePageNum == 0){
    cardsContainer.innerHTML = "";
    pokeArrayData = [];
    pokeArrayBuilder();
};

const pokeArrayBuilder = async () => { 

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${rangePageNum}&limit=20`);
    //const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`); All pokemons in just one fetch
    const dataPage = await response.json();
    const pokemonBasicArray = dataPage.results;
    moveNextLimit = dataPage.next;
    movePrevLimit = dataPage.previous;
    
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

        nextButton.disabled = !moveNextLimit
        prevButton.disabled = !movePrevLimit;
    }
}                         

//Next Pokemon Page EvenListener

nextButton.addEventListener('click', () => {

    if (!moveNextLimit) return;
    rangePageNum += 20;
    cardsContainer.innerHTML = "";
    pokeArrayData = [];
    pokeArrayBuilder();
});

//Prev Pokemon Page EvenListener

prevButton.addEventListener('click', () => {

    if (!movePrevLimit) return;
    rangePageNum -= 20;
    cardsContainer.innerHTML = "";
    pokeArrayData = [];
    pokeArrayBuilder();
});