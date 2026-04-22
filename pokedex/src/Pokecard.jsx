/* https://github.com/ashleighc207/react-pokedex/blob/master/src/PokemonCard.js */



function Pokecard ({id, name, img, type, base_experience}) {
    return (
        <div className="Pokecard">
            <h2>{name}</h2>
            {img}
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    );
};

export default Pokecard;