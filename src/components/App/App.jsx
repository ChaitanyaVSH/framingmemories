import React, { useEffect, useState } from 'react';
import Showcase from '../Showcase/Showcase';
import { useDispatch } from 'react-redux';
import fetchImages from '../../redux/actions/fetchImages';

const App = () => {

    const dispatch = useDispatch();
    const [render, setRender] = useState(false);

    useEffect(() => {
        dispatch(fetchImages()); // eslint-disable-next-line
    }, [])

    setTimeout(() => {
        setRender(true)
    }, 1000)

    return (
        <>
            {render ? <Showcase/> : null}
        </>
    )
};

export default App;
