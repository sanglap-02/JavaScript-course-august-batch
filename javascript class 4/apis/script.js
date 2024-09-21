// JavaScript to fetch Pokémon data from the PokeAPI and display it

document.getElementById('search-btn').addEventListener('click', searchPokemon);

function searchPokemon() {
    const query = document.getElementById('search-input').value.toLowerCase();
    if (query) {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${query}`;

        fetch(apiUrl).then(response =>{
            console.log(response.json());
        })


        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokémon not found');
                }
                return response.json();
            })
            .then(data => {
                displayPokemon(data);
            })
            .catch(error => {
                console.error('Error:', error);
                displayError(error.message);
            });
    }
}

const result ={
    name : "whatever",
    class : "10",
    arr : [
        {
            a : "22",
            b : "33"
        },
        {
            a : "55",
            b : "66"
        }
    ],
    link : "https://google.com"
}

// console.log(result.name);
// console.log(result.link);

// console.log(result.arr[1].a);





function displayPokemon(pokemon) {
    const pokemonInfo = document.getElementById('pokemon-info');
    pokemonInfo.innerHTML = `
        <div class="pokemon-name">${pokemon.name}</div>
        <div class="pokemon-img">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        </div>
        <div class="pokemon-details">
            <p><strong>Height:</strong> ${pokemon.height / 10} m</p>
            <p><strong>Weight:</strong> ${pokemon.weight / 10} kg</p>
            <p><strong>Type:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
        </div>
    `;
}

function displayError(message) {
    const pokemonInfo = document.getElementById('pokemon-info');
    pokemonInfo.innerHTML = `<p class="error">${message}</p>`;
}
