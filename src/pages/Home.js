import getData from "../utils/getData"; 

const Home = async () => { 
    for (let i = 1; i < 20; i++) {
        const characters = await getData(i);
        console.log(characters);
        const view = ` 
        <div class="Characters"> 
         
            <article class="Character-item"> 
            <a href="#/${characters.id}/"> 
            <img src="${characters.sprites.front_default}" alt="${characters.name}"> 
            <h2>${characters.name}</h2> 
            </a> 
            </article> 
        
        </div> 
        `; 
        return view; 
    }
}; 

export default Home;