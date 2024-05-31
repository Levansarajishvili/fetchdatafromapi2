import React, { useState, useEffect } from 'react';
import CatFact from './Components/CatFact';
import axios from 'axios';
import './App.css';

const App = () => {
    const [catFacts, setCatFacts] = useState([]);

    useEffect(() => {
        fetchCatFact();
    }, []);

    const fetchCatFact = async () => {
        try {
            const response = await axios.get('https://catfact.ninja/fact');
            setCatFacts([response.data]);
        } catch (error) {
            console.error('Error fetching cat fact:', error);
        }
    };

    const addCatFact = async () => {
        try {
            const response = await axios.get('https://catfact.ninja/fact');
            setCatFacts([...catFacts, response.data]);
        } catch (error) {
            console.error('Error fetching cat fact:', error);
        }
    };

    return (
        <div className="App">
            <h1>Cat Facts</h1>
            <button onClick={addCatFact}>Get New Cat Fact</button>
            <ul>
                {catFacts.map((fact, index) => (
                    <CatFact key={index} fact={fact} />
                ))}
            </ul>
        </div>
    );
};

export default App;
