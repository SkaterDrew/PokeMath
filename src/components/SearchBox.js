import React from "react";
import Scroll from './Scroll.js';

const SearchBox = ({searchField, setSearchfield, pokemons, setUrl}) => {
    return (
        <div className='flex justify-center f3-l'>
            <div>
                <input
                    style={{width: '12em', padding:'0 0.5em'}}
                    type='search'
                    placeholder='chercher un Pokémon'
                    onChange={event => setSearchfield(event.target.value)} // sets the state of searchfield to whatever is in the search box
                    value={searchField} // searchfield = value, but when we want to reset, we set searchfield state to '', which then resets the search box
                />
                { searchField !== '' && ( // this scroll will disapear if nothing is entered in the search box
                    <Scroll>
                        <div style={{width: '12em', opacity: '80%'}}>
                            {pokemons
                                .filter(pokemon => pokemon.name.includes(searchField)) // filters for searchfield entry
                                .map(pokemon => ( // maps each possible entry to a clickable text
                                    <p
                                    key={pokemon.name} // each child needs a unique key
                                    onClick={() => {setUrl(pokemon.url); setSearchfield('')}} // change pokemon url state when clicked
                                    >
                                        {pokemon.name}
                                    </p>
                                ))
                            }
                        </div>
                    </Scroll>
                )}
            </div>
        </div>
    )
}

export default SearchBox;