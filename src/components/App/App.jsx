import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {

    const appState = useSelector(state => state.appState)
    console.log("appState", appState)

    return (
        <>
            <div>App</div>
        </>
    )
};

export default App;
