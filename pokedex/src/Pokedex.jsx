/* https://github.com/mooneyclan/Colt-Steele-React-Bootcamp/blob/master/Section_05/pokedex-app/src/components/Pokedex.js */
/* https://react.dev/learn/rendering-lists */

import React from 'react'
import Pokecard from './Pokecard'
import './index.css'


const pokedexList = [
    {id: 4, name: "Charmander", type: "fire", base_experience: 62},
    {id: 7, name: "Squirtle", type: "water", base_experience: 63},
    {id: 11, name: "Metapod", type: "bug", base_experience: 72},
    {id: 12, name: "Butterfree", type: "flying", base_experience: 178},
    {id: 25, name: "Pikachu", type: "electric", base_experience: 112},
    {id: 39, name: "Jigglypuff", type: "normal", base_experience: 95},
    {id: 94, name: "Gengar", type: "poison", base_experience: 225},
    {id: 133, name: "Eevee", type: "normal", base_experience: 65}
];    

function Pokedex () {
    return (
        
        <div className="Flex">
            {pokedexList.map(n => {
                    return (
                            <Pokecard
                                key={n.id}
                                name={n.name}
                                img={<img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${n.id}.png`} />}
                                type={n.type}
                                base_experience={n.base_experience}
                            />    
                    );
                })
            }  
        </div>     
    )
};

export default Pokedex;