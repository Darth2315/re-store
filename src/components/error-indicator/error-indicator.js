import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <>
            <h2 className="error-indicator">От халепа... щось пішло не так :(</h2>
            <p className="error-indicator-text">Спробуйте перезавантажити сторінку...</p>
        </>
    )
}

export default ErrorIndicator;