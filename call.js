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
    const dataNextPage = await response.json();
    const pokemonBasicArray = dataNextPage.results;
    
    for(let element of pokemonBasicArray){

        const namePokemon = element.name;
        const pokemonDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
        const pokemonData = await pokemonDataResponse.json(); //Pokemon Data Container - This Object has all information about a specific pokemon. Remember that is a Iteration, so it's doing this kind of array for each pokemon
        
        //Map for Abilities and Types - Both are arrays

        const abilitiesPokemonArray = pokemonData.abilities.map(
            abilityPokemon => `${abilityPokemon.ability.name[0].toUpperCase()}${abilityPokemon.ability.name.slice(1)}`
        );

        const typesPokemonArray = pokemonData.types.map(
            typePokemon => `${typePokemon.type.name[0].toUpperCase()}${typePokemon.type.name.slice(1)}`
        );

        // Object Construction

        const objectPokemon = {
            thumbnail: pokemonData.sprites.front_default, 
            id: pokemonData.id, 
            name: `${pokemonData.name[0].toUpperCase()}${pokemonData.name.slice(1)}`, 
            type: typesPokemonArray,
            //description: 'A tough rock-bodied Pokémon that releases toxic minerals from its body when threatened.',
            height: `${pokemonData.height} m`,
            weight: `${pokemonData.weight} kg`,
            ability: abilitiesPokemonArray,
            //habitat: 
        }; console.log(objectPokemon);

        //pokeArrayData.push(`${namePokemon[0].toUpperCase()}${namePokemon.slice(1)} has a weight of ${weightPokemon}kg`);
        //After finish the object for every pokemon, I need to push the objects in an array that it'll be the base to build every card in when the user changes of page

    }
rangePageNum += 20;
//}                          BORRAR SIGNOS DE COMENTARIO LUEGO!!!!!!!!!!!!!!

//Next Pokemon Page Function

/*const cardsContainer = document.getElementById("cards-container");
const nextButton = document.getElementById('next-button');

const nextPageButtom =  () => {

    //La función limpiará el contenedor HTML y desplegará las nuevas cartas con los pokemones correspondiesntes a la siguiente página de la API
    cardsContainer.innerHTML = "";
    //Call generateFunction - This function is using the array that "pokeArrayBuilder" does how a callback function
}*/
