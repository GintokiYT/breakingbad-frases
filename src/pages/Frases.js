import React, { useState, useEffect } from 'react';

import styled from '../css/Frase.module.css';

const Frases = () => {

    // State de frases
    const [ frase , guardarFrase] = useState({});

    const getID = () => {
        return Math.floor(Math.random() * 70) + 1;
    }

    const consultarAPI = async () => {
        const api = await fetch(`https://breakingbadapi.com/api/quotes`);
        const frase = await api.json();
        guardarFrase(frase[getID()]);
    }

    useEffect(() => {
        consultarAPI();
    },[]);

    const { author, quote } = frase;

    return (  
        <main className={styled.main}>
            <div className={styled.contenedor}>
            <h1 className={styled.frase}>{quote}</h1>
            <p className={styled.autor}>-{author}</p>
            </div>
            <button 
                className={styled.boton}
                onClick={consultarAPI}
            >Obtener frase</button>
        </main>
    );
}
 
export default Frases;