
// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types'

const FirstApp = ({nombre,edad}) => {

    // const nombre = 'Hola Mundo';
    return (
        <>
            <h1>Hola { nombre }</h1>
            <p>Tu edad es de : { edad }</p>
        </>
    );
}

FirstApp.propTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number
}
FirstApp.defaultProps = {
    edad: 10
}

export default FirstApp;