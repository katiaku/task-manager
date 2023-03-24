import React, { useState, useEffect } from 'react';
import { getRandomJoke } from '../../services/axiosService';

const RandomJoke = () => {
    
    const [joke, setJoke] = useState(null);

    useEffect(() => {
        obtainJoke()
    }, []);

    const obtainJoke = () => {
        getRandomJoke()
            .then((response) => {
                if(response.status === 200){
                    setJoke(response.data.results)
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            })
    } 

    const [countThumbsUp, setCountThumbsUp] = useState(0);

    const addThumbsUp = () => {
        setCountThumbsUp(prevCountThumbsUp => prevCountThumbsUp + 1)
    }

    const [countThumbsDown, setCountThumbsDown] = useState(0);

    const addThumbsDown = () => {
        setCountThumbsDown(prevCountThumbsDown => prevCountThumbsDown + 1)
    }

    return (
        <div>
            <h2>Chuck Norrise sends you this joke!</h2>
            <p>{joke.value}</p>
            <h3>Get a new joke from Chuck</h3>
            <button onClick={obtainJoke}>Random Joke</button>
            <button onClick={addThumbsUp}>Thumbs Up!</button>
            <h4>Funny jokes: {countThumbsUp}</h4>
            <button onClick={addThumbsDown}>Thumbs Down!</button>
            <h4>Not so funny jokes: {countThumbsDown}</h4>
        </div>
    )
}

export default RandomJoke;
