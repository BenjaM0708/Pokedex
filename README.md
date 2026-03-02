🎮📟 Pokédex Project – Ash’s Capture Tracker

“I wanna be the very best… like no one ever was!” – probably me while coding this 👨‍💻⚡

Welcome to my Pokédex Midcourse Project!
In this project, I helped Ash Ketchum from Pallet Town keep track of how many Pokémon he has captured so far. Because let’s be honest… someone has to organize that chaos. 😅

🌟 Project Overview

This project is a fully dynamic Pokédex web application built using:

🧱 HTML – Structure of each Pokémon card

🎨 CSS – Styling and layout

🧠 JavaScript – DOM manipulation and dynamic rendering

The goal?
Create Pokémon cards dynamically from a JavaScript array and display them beautifully on screen. ✨

🧩 Features

✔️ Dynamic Pokémon card generation
✔️ Clean and reusable HTML structure
✔️ Styled with only .classes and #ids
✔️ JavaScript-powered rendering
✔️ Multiple Pokémon types per card
✔️ Scalable structure to add more Pokémon easily
✔️ Ash-approved design 😎

🏗️ Project Structure
📂 pokedex-project
 ┣ 📜 index.html
 ┣ 🎨 style.css
 ┣ 🧠 script.js
 ┗ 📁 media/
      ┣ bulbasaur.png
      ┣ charmander.png
      ┗ squirtle.png
🧱 HTML

The HTML structure is written once and used as a template for all Pokémon cards.

Each card contains:

🖼️ Pokémon thumbnail

🔢 Pokémon ID

🏷️ Name

🌿🔥💧 Types

Cards are generated dynamically using JavaScript.

🎨 CSS

Inside style.css you’ll find:

Only .classes and #ids

Flexbox/Grid for layout

Card styling (borders, spacing, hover effects)

Type-based styling possibilities

The goal wasn’t pixel-perfect design — but clean, readable, maintainable CSS.

🧠 JavaScript

The magic happens here ✨

We store Pokémon inside an array of objects like this:

const pokemons = [
  {
    thumbnail: 'media/bulbasaur.png',
    id: 1,
    name: 'Bulbasaur',
    type: ['Plant', 'Poison']
  },
  {
    thumbnail: 'media/charmander.png',
    id: 4,
    name: 'Charmander',
    type: ['Fire']
  }
];
What the script does:

🔁 Iterates over the array

🏗️ Creates HTML elements dynamically

🧲 Injects them into the DOM

🎉 Displays all Pokémon cards on screen

🧮 Capture Counter (Ash’s Tracker)

The application keeps track of how many Pokémon Ash has captured.

This can be done by:

Counting the array length

Or updating a counter when new Pokémon are added

Because a Pokémon Master needs stats 📊🔥

🚀 How to Run the Project

Clone the repository:

git clone https://github.com/your-username/pokedex-project.git

Open index.html in your browser.

Catch 'em all 🧢⚡

🛠️ Future Improvements

🔍 Search bar

🎨 Filter by type

🌙 Dark mode

📱 Responsive mobile design

❤️ Favorite Pokémon feature

🌎 Connect to PokéAPI

💡 What I Learned

DOM manipulation

Dynamic content rendering

Array iteration

Object-based data modeling

Clean CSS structure

Separation of concerns

And most importantly…

Console.log() is my best friend 🫶

🎉 Final Words

This project helped me practice everything I’ve learned so far and combine it into a complete mini-application.

Ash might still lose to the Elite Four…
But at least now he has a well-structured Pokédex. 😌

⚡ Gotta Code 'Em All! ⚡
