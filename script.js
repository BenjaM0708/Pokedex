//Array

const pokeArray = [
    {
        thumbnail: 'Media/001.png',
        id: 1,
        name: 'Bulbasaur',
        type: ['Plant', 'Poison'],
        description: 'A small quadruped Pokémon with a large plant bulb on its back. The bulb grows as it absorbs sunlight and stores energy for evolution.',
        height: '0.7 m',
        weight: '6.9 kg',
        ability: 'Overgrow',
        habitat: 'Forests and grassy areas'
    },
    {
        thumbnail: 'Media/002.png',
        id: 2,
        name: 'Charmander',
        type: ['Fire'],
        description: 'A small fire-type Pokémon with a flame burning at the tip of its tail. The flame reflects its health and emotional state.',
        height: '0.6 m',
        weight: '8.5 kg',
        ability: 'Blaze',
        habitat: 'Mountain paths and warm regions'
    },
    {
        thumbnail: 'Media/003.png',
        id: 3,
        name: 'Caterpie',
        type: ['Bug'],
        description: 'A tiny worm-like Pokémon that moves quickly through forests. It releases a strong odor from its antennae to scare away predators.',
        height: '0.3 m',
        weight: '2.9 kg',
        ability: 'Shield Dust',
        habitat: 'Forests and tall grass'
    },
    {
        thumbnail: 'Media/004.png',
        id: 4,
        name: 'Kaluna',
        type: ['Bug', 'Poison'],
        description: 'A mysterious insect Pokémon known for its toxic defense mechanisms. It secretes poisonous particles when threatened.',
        height: '0.8 m',
        weight: '7.3 kg',
        ability: 'Poison Point',
        habitat: 'Dark forests and humid areas'
    },
    {
        thumbnail: 'Media/005.png',
        id: 5,
        name: 'Ratata',
        type: ['Plant'],
        description: 'A quick and alert Pokémon that survives in almost any environment. Its sharp teeth allow it to chew through tough materials.',
        height: '0.3 m',
        weight: '3.5 kg',
        ability: 'Run Away',
        habitat: 'Fields and urban areas'
    },
    {
        thumbnail: 'Media/006.png',
        id: 6,
        name: 'Pikachu',
        type: ['Electrical'],
        description: 'A famous electric mouse Pokémon that stores electricity in its cheek sacs. It releases sparks when excited or threatened.',
        height: '0.4 m',
        weight: '6.0 kg',
        ability: 'Static',
        habitat: 'Forests and near human settlements'
    },
    {
        thumbnail: 'Media/007.png',
        id: 7,
        name: 'Vulpix',
        type: ['Fire', 'Plant'],
        description: 'A small fox Pokémon with beautiful curled tails. It can control small flames and prefers warm climates.',
        height: '0.6 m',
        weight: '9.9 kg',
        ability: 'Flash Fire',
        habitat: 'Volcanic areas and warm forests'
    },
    {
        thumbnail: 'Media/008.png',
        id: 8,
        name: 'Jigglypuff',
        type: ['Normal', 'Fairy'],
        description: 'A round Pokémon known for its melodic voice. When it sings, most creatures nearby fall into a deep sleep.',
        height: '0.5 m',
        weight: '5.5 kg',
        ability: 'Cute Charm',
        habitat: 'Grasslands and villages'
    },
    {
        thumbnail: 'Media/009.png',
        id: 9,
        name: 'Ice',
        type: ['Bug'],
        description: 'A Pokémon that thrives in freezing temperatures. Its body adapts to icy winds and cold climates.',
        height: '0.9 m',
        weight: '12 kg',
        ability: 'Ice Body',
        habitat: 'Snowy mountains'
    },
    {
        thumbnail: 'Media/010.png',
        id: 10,
        name: 'Ground',
        type: ['Normal'],
        description: 'A sturdy Pokémon that spends most of its time underground. It digs tunnels to search for food and avoid danger.',
        height: '1.0 m',
        weight: '15 kg',
        ability: 'Sand Veil',
        habitat: 'Deserts and dry plains'
    },
    {
        thumbnail: 'Media/011.png',
        id: 11,
        name: 'Ghost',
        type: ['Poison'],
        description: 'A shadowy Pokémon that appears mostly at night. It moves silently and can poison enemies with a spectral touch.',
        height: '1.1 m',
        weight: '10 kg',
        ability: 'Cursed Body',
        habitat: 'Abandoned places'
    },
    {
        thumbnail: 'Media/012.png',
        id: 12,
        name: 'Deer',
        type: ['Fire'],
        description: 'A swift forest Pokémon that can run great distances. It can generate small flames when it charges.',
        height: '1.4 m',
        weight: '30 kg',
        ability: 'Flame Charge',
        habitat: 'Forests and valleys'
    },
    {
        thumbnail: 'Media/013.png',
        id: 13,
        name: 'Dark',
        type: ['Fairy'],
        description: 'A mysterious Pokémon that hides in shadows and uses clever tricks to confuse its opponents.',
        height: '0.8 m',
        weight: '11 kg',
        ability: 'Prankster',
        habitat: 'Caves and dark forests'
    },
    {
        thumbnail: 'Media/014.png',
        id: 14,
        name: 'Stell',
        type: ['Normal', 'Electrical'],
        description: 'A metallic Pokémon capable of storing electrical energy inside its body and releasing it in bursts.',
        height: '1.2 m',
        weight: '25 kg',
        ability: 'Magnet Pull',
        habitat: 'Mountains and industrial areas'
    },
    {
        thumbnail: 'Media/015.png',
        id: 15,
        name: 'Cat',
        type: ['Fire'],
        description: 'A playful feline Pokémon with fast reflexes and fiery attacks. It enjoys chasing moving objects.',
        height: '0.7 m',
        weight: '8 kg',
        ability: 'Flame Body',
        habitat: 'Cities and warm plains'
    },
    {
        thumbnail: 'Media/016.png',
        id: 16,
        name: 'Rock',
        type: ['Fairy', 'Poison'],
        description: 'A tough rock-bodied Pokémon that releases toxic minerals from its body when threatened.',
        height: '1.3 m',
        weight: '40 kg',
        ability: 'Sturdy',
        habitat: 'Rocky caves and mountains'
    },
];

//Function to Make the Cards 

const cardsContainer = document.getElementById("cards-container");

function pokedex(pokeArray) {

cardsContainer.innerHTML = "";

  for (let i = 0; i < pokeArray.length; i++) {

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
    pokeImg.src = pokeArray[i].thumbnail;
    pokeImg.alt = `${pokeArray[i].name} picture`;
    imgContainer.append(pokeImg);

    //Number

    const pokeNumber = document.createElement("p");
    pokeNumber.classList.add("number");
    pokeNumber.textContent = `00${pokeArray[i].id}`;
    frontCard.append(pokeNumber);

    //Name

    const pokeName = document.createElement("p");
    pokeName.classList.add("poke-name");
    pokeName.textContent = pokeArray[i].name;
    frontCard.append(pokeName);

    //Type Container

    const typeContainer = document.createElement("div");
    typeContainer.classList.add("type-container");
    frontCard.append(typeContainer);

    //Type of Pokemon

    for (let j = 0; j < pokeArray[i].type.length; j++){
            const pokeType = document.createElement("p");
            const typeName = pokeArray[i].type[j];              //Name of every pokemon class
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
    pokeNameBack.textContent = pokeArray[i].name.toUpperCase();
    backCard.append(pokeNameBack);    

    //Description text

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = pokeArray[i].description;
    backCard.append(description);

    //Features Box

    const featuresBox = document.createElement("div");
    featuresBox.classList.add("features-box");
    backCard.append(featuresBox);

    //Features 
 
    const pokeHeight = document.createElement("p");
    pokeHeight.classList.add("features");
    pokeHeight.textContent = `Height: ${pokeArray[i].height}`;
    featuresBox.append(pokeHeight);

    const pokeWeight = document.createElement("p");
    pokeWeight.classList.add("features");
    pokeWeight.textContent = `Weight: ${pokeArray[i].weight}`;
    featuresBox.append(pokeWeight);

    const pokeAbility = document.createElement("p");
    pokeAbility.classList.add("features");
    pokeAbility.textContent = `Ability: ${pokeArray[i].ability}`;
    featuresBox.append(pokeAbility);

    const pokeHabitat = document.createElement("p");
    pokeHabitat.classList.add("features");
    pokeHabitat.textContent = `Habitat: ${pokeArray[i].habitat}`;
    featuresBox.append(pokeHabitat);

    //Click Event
/*
    pokeCard.addEventListener("click", () => {
    pokeCard.classList.toggle("flip");
});
*/
  }
};

pokedex(pokeArray); //I made it without the function. I just wanted try this way

//Click Event

cardsContainer.addEventListener("click", (event) => {

    const card = event.target.closest(".poke-card");

    if (!card) return;

    card.classList.toggle("flip");

});