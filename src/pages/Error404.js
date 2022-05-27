import React from 'react';
import error404 from '../assets/error404.png';
import styled from '../css/Error404.module.css';

const Error404 = () => {
    return (  
        <main className={styled.main}>
            <img className={styled.img} src={error404} alt="Error 404" />
        </main>
    );
}
 
export default Error404;