//Array

const pokeArray = [
    {
        thumbnail: 'Media/001.png',
        id: 1,
        name: 'Bulbasaur',
        type: ['Plant', 'Poison'] 
    },
    {
        thumbnail: 'Media/002.png',
        id: 2,
        name: 'Charmander',
        type: ['Fire'] 
    },
    {
        thumbnail: 'Media/003.png',
        id: 3,
        name: 'Caterpie',
        type: ['Bug'] 
    },
    {
        thumbnail: 'Media/004.png',
        id: 4,
        name: 'Kaluna',
        type: ['Bug', 'Poison'] 
    },
    {
        thumbnail: 'Media/005.png',
        id: 5,
        name: 'Ratata',
        type: ['Plant'] 
    },
    {
        thumbnail: 'Media/006.png',
        id: 6,
        name: 'Pikachu',
        type: ['Electrical'] 
    },
    {
        thumbnail: 'Media/007.png',
        id: 7,
        name: 'Vulpix',
        type: ['Fire', 'Plant'] 
    },
    {
        thumbnail: 'Media/008.png',
        id: 8,
        name: 'Jigglypuff',
        type: ['Normal', 'Fairy'] 
    },
    {
        thumbnail: 'Media/009.png',
        id: 9,
        name: 'Ice',
        type: ['Bug'] 
    },
    {
        thumbnail: 'Media/010.png',
        id: 10,
        name: 'Ground',
        type: ['Normal'] 
    },
    {
        thumbnail: 'Media/011.png',
        id: 11,
        name: 'Ghost',
        type: ['Poison'] 
    },
    {
        thumbnail: 'Media/012.png',
        id: 12,
        name: 'Deer',
        type: ['Fire'] 
    },
    {
        thumbnail: 'Media/013.png',
        id: 13,
        name: 'Dark',
        type: ['Fairy'] 
    },
    {
        thumbnail: 'Media/014.png',
        id: 14,
        name: 'Stell',
        type: ['Normal', 'Electrical'] 
    },
    {
        thumbnail: 'Media/015.png',
        id: 15,
        name: 'Cat',
        type: ['Fire'] 
    },
    {
        thumbnail: 'Media/016.png',
        id: 16,
        name: 'Rock',
        type: ['Fairy', 'Poison'] 
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

    //Imagen Container

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    pokeCard.append(imgContainer);

    //Imagen

    const pokeImg = document.createElement("img");
    pokeImg.src = pokeArray[i].thumbnail;
    pokeImg.alt = `${pokeArray[i].name} picture`;
    imgContainer.append(pokeImg);

    //Number

    const pokeNumber = document.createElement("p");
    pokeNumber.classList.add("number");
    pokeNumber.textContent = `Nº ${pokeArray[i].id}`;
    pokeCard.append(pokeNumber);

    //Name

    const pokeName = document.createElement("p");
    pokeName.classList.add("poke-name");
    pokeName.textContent = pokeArray[i].name;
    pokeCard.append(pokeName);

    //Type Container

    const typeContainer = document.createElement("div");
    typeContainer.classList.add("type-container");
    pokeCard.append(typeContainer);

    //Type of Pokemon

    for (let j = 0; j < pokeArray[i].type.length; j++){
            const pokeType = document.createElement("p");
            const typeName = pokeArray[i].type[j];              //Name of every pokemon class
            pokeType.classList.add(typeName.toLowerCase());
            pokeType.classList.add("type-style");
            pokeType.textContent = typeName;
            typeContainer.append(pokeType);
    }
  }
};

pokedex(pokeArray); //I made it without the function. I just wanted try this way
