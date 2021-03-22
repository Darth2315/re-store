import React from 'react';
import './subscribe.css';

const Subscribe = () => {
    return (
        <div className="subscribe">
            <input type="text" placeholder="Введіть ваш e-mail для ароматних новин та пропозицій"/>
            <button className="btn-subscribe">Підписатися</button>
        </div>
    )
}

export default Subscribe;