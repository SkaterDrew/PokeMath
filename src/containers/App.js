import React, { useState, useEffect, useRef } from 'react';
import Nav from '../components/Nav.js';
import Header from '../components/Header.js';
import Button from '../components/Button.js';
import SearchBox from '../components/SearchBox.js';
import Card from '../components/Card.js';
import Operations from '../components/Operations.js';
import Answer from '../components/Answer.js';
import Footer from '../components/Footer.js';
import './App.css';

function App() {

    const initialFetch = useRef(false); // to avoid fetching on first render

    const [operation, setOperation] = useState('+'); // registering the selected mathematical operator
    const [pokemons, setPokemons] = useState([]); // getting the list of pokemons, with attributes 'name' and 'url'
    const [pokeCount, setPokeCount] = useState(1025); // count the total amount of pokemon (since it often increases with new games)

    const [poke1, setPoke1] = useState(null); // fetched data for a picked pokemon
    const [pokeUrl1, setPokeUrl1] = useState(''); // url to fetch data for a picked pokemon
    const [searchfield1, setSearchfield1] = useState(''); // searchfield to find a pokemon

    const [poke2, setPoke2] = useState(null); // fetched data for a picked pokemon
    const [pokeUrl2, setPokeUrl2] = useState(''); // url to fetch data for a picked pokemon
    const [searchfield2, setSearchfield2] = useState(''); // searchfield to find a pokemon

    const [show, setShow] = useState(false); // true if we show the answer, false if not

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon-species/') // fetch list of species first, to avoid list of all possible forms
            .then(response => response.json())
            .then(result => result.count)
            .then(count => {
                setPokeCount(count); // update total amount of pokemon
                fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${count}`) // fetch data for all pokemons (not including all forms)
                    .then(response => response.json())
                    .then(result => {
                        const pokemonList = result.results;
                        setPokemons(pokemonList);
                        initialFetch.current = true; // now allows to fetch data for individual pokemons
                        setPokeUrl1(pokemonList[Math.floor(Math.random()*count)].url); // initially set random pokemons
                        setPokeUrl2(pokemonList[Math.floor(Math.random()*count)].url);
                    })
            })
    },[])

    useEffect(() => {
        setShow(false); // when we change pokemon, the answer changes, so we hide the answer
        if (initialFetch.current) {
            fetch(pokeUrl1)
                .then(response => response.json())
                .then(pokemon => setPoke1(pokemon)); // change the pokemon based on the url provided
        }
    },[pokeUrl1])

    useEffect(() => {
        setShow(false); // when we change pokemon, the answer changes, so we hide the answer
        if (initialFetch.current) {
            fetch(pokeUrl2)
                .then(response => response.json())
                .then(pokemon => setPoke2(pokemon)); // change the pokemon based on the url provided
        }
    },[pokeUrl2])

    function getAnswer() { // calculates the answer to the mathematical operation
        if (!poke1 || !poke2) { // doesn't calculate if there are no information on either pokemon (null)
            return '';
        } else {
            if (operation === '-') {
                return poke1.id - poke2.id;
            } else if (operation === 'x') {
                return poke1.id * poke2.id;
            } else {
                return poke1.id + poke2.id;
            }
        }
    }

    function chooseOp(operation) {
        if (operation === 'add') return chooseAdd;
        if (operation === 'sub') return chooseSub;
        if (operation === 'mult') return chooseMult;
    }

    function chooseAdd(event) {
        setShow(false);
        setOperation('+')
    }

    function chooseSub(event) {
        setShow(false);
        setOperation('-')
    }

    function chooseMult(event) {
        setShow(false);
        setOperation('x')
    }

    function random(event) { // randomly select 2 new pokemon on button click
        const randomPkm = () => pokemons[Math.floor(Math.random()*pokeCount)];
        setPokeUrl1(randomPkm().url);
        setPokeUrl2(randomPkm().url);
        setSearchfield1(''); // also resets the searchfield
        setSearchfield2('');
    }

    function reveal(event) { // allows to reveal the answer on click
        setShow(true);
    }

    return (!pokemons.length || !poke1 || !poke2) ? // prevents an error from occuring if data is not yet fetched
        <h1> Loading </h1> :
        (
            <div className="tc roboto bg-light-blue">
                <Nav chooseOp={chooseOp}/> {/* allows to choose the operation */}
                <Header/>
                <div className="flex flex-wrap items-center pa2">
                    <div className='flex flex-column w-100 w-40-ns'> {/* first pokemon and search bar */}
                        <SearchBox
                            searchField={searchfield1}
                            setSearchfield={setSearchfield1}
                            pokemons={pokemons}
                            setUrl={setPokeUrl1}
                        />
                        <Card 
                            name={poke1.name}
                            id={poke1.id}
                            img={poke1.sprites.other.home.front_default}
                        />
                    </div>
                    <div className='flex flex-column w-100 w-20-ns'>
                        <Button onClick={random} text={'Aléatoire'}/> {/* activates random function */}
                        <Operations operation={operation} size={'w-100'}/> {/* displays the chosen operation */}
                    </div>
                    <div className='flex flex-column w-100 w-40-ns'> {/* first pokemon and search bar */}
                        <SearchBox
                            searchField={searchfield2}
                            setSearchfield={setSearchfield2}
                            pokemons={pokemons}
                            setUrl={setPokeUrl2}
                        />
                        <Card
                            name={poke2.name}
                            id={poke2.id}
                            img={poke2.sprites.other.home.front_default}
                        />
                    </div>
                    <Operations operation={'='} size={'w-100 w-20-ns'}/> {/* displays the equal sign */}
                    <Answer answer={getAnswer()} show={show} reveal={reveal}/> {/* displays the answer when show =true, displays a button when show=false */}
                </div>
                <Footer/>
            </div>
        );
}

export default App;
