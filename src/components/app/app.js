import React from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const App = () => {
    return (
        <>
            <h1>Hello</h1>
            <Spinner/>
            <ErrorIndicator/>
        </>
    )
}

export default App;