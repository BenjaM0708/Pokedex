//Globals Variables

const cardsContainer = document.getElementById("cards-container");
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
let pokeArrayData = []; // If pokeArrayData.length is a "conts" do: pokeArrayData.length = 0 
let rangePageNum = 0;
cardsContainer.innerHTML = "";
let moveNextLimit = 'init';
let movePrevLimit = null;

//Pokemon Array Builder

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

        const pokeHabitat = pokemonSpeciesArray.habitat ? `${pokemonSpeciesArray.habitat.name[0].toUpperCase()}${pokemonSpeciesArray.habitat.name.slice(1)}` : `Unknown`;
        const pokeDescription = pokemonSpeciesArray.flavor_text_entries.find(description => description.language.name === "en" );
        const clearDescription =pokeDescription.flavor_text.replace(/[\n\f\r\s]+/g, " ").replace(/s+/g, " ").replace(/pokémon/gi, "pokemon").trim();
  
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
    pokedex(pokeArrayData);
    nextButton.disabled = !moveNextLimit
    prevButton.disabled = !movePrevLimit;
}                         

pokeArrayBuilder();

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

//End of the call.js -------- IMPORTANT

//Function to Make the Cards 

function pokedex(pokeArrayData) {

cardsContainer.innerHTML = "";

  for (let i = 0; i < pokeArrayData.length; i++) {

    //Card

    const pokeCard = document.createElement("div");
    pokeCard.classList.add("poke-card");
    pokeCard.id = `card-${i+1}`;
    cardsContainer.append(pokeCard);

    //Frontside of the Card

    const frontCard = document.createElement("div");
    frontCard.classList.add("front-card");
    pokeCard.append(frontCard);

    //Imagen Container

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    frontCard.append(imgContainer);

    //Imagen

    const pokeImg = document.createElement("img");
    pokeImg.src = pokeArrayData[i].thumbnail;
    pokeImg.alt = `${pokeArrayData[i].name} picture`;
    imgContainer.append(pokeImg);

    //Number

    const pokeNumber = document.createElement("p");
    pokeNumber.classList.add("number");
    pokeNumber.textContent = `00${pokeArrayData[i].id}`;
    frontCard.append(pokeNumber);

    //Name

    const pokeName = document.createElement("p");
    pokeName.classList.add("poke-name");
    pokeName.textContent = pokeArrayData[i].name;
    frontCard.append(pokeName);

    //Type Container

    const typeContainer = document.createElement("div");
    typeContainer.classList.add("type-container");
    frontCard.append(typeContainer);

    //Type of Pokemon

    for (let j = 0; j < pokeArrayData[i].type.length; j++){
            const pokeType = document.createElement("p");
            const typeName = pokeArrayData[i].type[j];              //Name of every pokemon class
            pokeType.classList.add(typeName.toLowerCase());
            pokeType.classList.add("type-style");
            pokeType.textContent = typeName;
            typeContainer.append(pokeType);
    }

    //Backside of the Card

    const backCard = document.createElement("div");
    backCard.classList.add("back-card");
    pokeCard.append(backCard);

    //Description Box

    const descriptionBox = document.createElement("div");
    descriptionBox.classList.add("description-box");
    backCard.append(descriptionBox);

    const pokeNameBack = document.createElement("p");
    pokeNameBack.classList.add("back-name");
    pokeNameBack.textContent = pokeArrayData[i].name.toUpperCase();
    backCard.append(pokeNameBack);    

    //Description text

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = pokeArrayData[i].description;
    backCard.append(description);

    //Features Box

    const featuresBox = document.createElement("div");
    featuresBox.classList.add("features-box");
    backCard.append(featuresBox);

    //Features 
 
    const pokeHeight = document.createElement("p");
    pokeHeight.classList.add("features");
    pokeHeight.textContent = `Height: ${pokeArrayData[i].height}`;
    featuresBox.append(pokeHeight);

    const pokeWeight = document.createElement("p");
    pokeWeight.classList.add("features");
    pokeWeight.textContent = `Weight: ${pokeArrayData[i].weight}`;
    featuresBox.append(pokeWeight);

    const pokeAbility = document.createElement("p");
    pokeAbility.classList.add("features");
    pokeAbility.textContent = `Ability: ${pokeArrayData[i].ability}`;
    featuresBox.append(pokeAbility);

    const pokeHabitat = document.createElement("p");
    pokeHabitat.classList.add("features");
    pokeHabitat.textContent = `Habitat: ${pokeArrayData[i].habitat}`;
    featuresBox.append(pokeHabitat);

  }
};

//Click Event

cardsContainer.addEventListener("click", (event) => {

    const card = event.target.closest(".poke-card");

    if (!card) return;

    card.classList.toggle("flip");

});