import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Showcase from '../Showcase/Showcase';
import { useDispatch } from 'react-redux';
import fetchImages from '../../redux/actions/fetchImages';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchImages()); // eslint-disable-next-line
    }, [])

    const appState = useSelector(state => state.appState)
    console.log("appState", appState)

    return (
        <>
            <Showcase/>
        </>
    )
};

export default App;
