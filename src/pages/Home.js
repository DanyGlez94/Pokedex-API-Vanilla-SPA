import getAllPokemon from "../utils/getAllPokemon";

const Home = async () => {
    const allPokemon = await getAllPokemon();
    console.log(allPokemon);
    const view = `
    <div class="Characters">
    ${allPokemon.map(pokemon => `
                <article class="Character-item">
                    <a href="#/${pokemon.id}/">
                        <div class="img-container">
                            <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}">
                        </div>
                        
                        <h2 class="info number">#${pokemon.id.toString().padStart(3, '0')}</h2>
                        <h2 class="info name">${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
                        
                    </a>
                </article>
            `).join('')}
        </div>
    `;
    return view;
}; 

export default Home;