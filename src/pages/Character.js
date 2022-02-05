import getHash from '../utils/getHash';
import getPokemon from '../utils/getPokemon';

const Character = async () => {
    const id = getHash();
    const pokemon = await getPokemon(id);
    const pokemonId = pokemon.id.toString().padStart(3, '0');
    const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const pokemonImage = pokemon.sprites.other["official-artwork"].front_default;
    const pokemonType = pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1);
    console.log(pokemon);
    const view = `
        <div class="Characters-inner">
            <article class="Characters-card">
                <div class="img-container-card" >
                    <img src="${pokemonImage}" alt="${pokemonName}">
                </div>
                </article>
            <article class="Character-card">
                <h2>${pokemonName}</h2>
                <div class="Card-info">
                    <div>
                        <h3>No. <span>#${pokemonId}</span></h3>
                        <h3>Height: <span>${(pokemon.height)/10}</span> m</h3>
                    </div>
                    <div>
                        <h3>Weight: <span>${(pokemon.weight)/10}</span> kg</h3>
                        <h3>Type: <span>${(pokemonType)}</span></h3>
                    </div>
                </div>
            </article>
        </div>
    `;
    return view;
};

export default Character;