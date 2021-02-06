import React, { useState } from 'react';
import PropTypes from 'prop-types'
const CounterApp = ({ value = 0 }) => {


    const [counter, setCounter] = useState(value); // useState hooks (función) regressa un array


    const add = () => {
        setCounter(counter + 1);
        // setCounter((counter) => counter + 1);
    }

    const subtract = () => setCounter((counter) => counter - 1);
    

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={ add }> + 1</button>
            <button onClick={  () => { setCounter(value) } } > Reset</button>
            <button onClick={ subtract }> - 1</button>
        </>
    )
};

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;

