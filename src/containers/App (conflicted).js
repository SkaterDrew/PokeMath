import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav.js';
import Header from '../components/Header.js';
import Card from '../components/Card.js';
import Footer from '../components/Footer.js';
import './App.css';

function App() {

    let id1 = 0;
    let id2 =1;

    const [operation, setOperation] = useState('+');
    const [pokemons, setPokemons] = useState([]);
    const [poke1, setPoke1] = useState([]);
    const [poke2, setPoke2] = useState([]);
    const [stat, setStat] = useState('number');

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon-species/')
            .then(response => response.json())
            .then(result => result.count)
            .then(count => {
                id1 = Math.floor(Math.random()*(count));
                id2 = Math.floor(Math.random()*(count))
                fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${count}`)
                    .then(response => response.json())
                    .then(result => setPokemons(result.results))
            })
    },[])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/0/`)
            .then(response => response.json())
            .then(pokemon => setPoke1(pokemon));
    },[poke1])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
            .then(response => response.json())
            .then(pokemon => setPoke2(pokemon));
    },[poke2])

    function chooseOp(operation) {
        if (operation === 'add') return chooseAdd;
        if (operation === 'sub') return chooseSub;
        if (operation === 'mult') return chooseMult;
    }

    function chooseAdd(event) {
        setOperation('+')
    }

    function chooseSub(event) {
        setOperation('-')
    }

    function chooseMult(event) {
        setOperation('x')
    }



    return !pokemons.length && !poke1.length && !poke2.length ?
        <h1> Loading </h1> :
        (
            <div className="tc roboto">
                <Nav chooseOp={chooseOp}/>
                <Header/>
                <div className="cf pa2">
                    <Card name={poke1.name} id={poke1.id} img={poke1.sprites.other.home.front_default}/>
                    <div className="fl w-100 w-20-ns ph2 pt1">
                        <div className="outline ph1 pv2">
                            {operation}
                        </div>
                    </div>
                    <div className="fl w-100 w-40-ns ph2 pt1">
                        <div className="outline ph1 pv2">
                            {pokemons[poke2] && pokemons[poke2].name}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
}

export default App;
