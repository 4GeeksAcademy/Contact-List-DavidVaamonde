import React, { useState } from 'react'
import useGlobalReducer from '../../hooks/useGlobalReducer';
import { Link } from "react-router-dom";

export const AddContact = () => {

    return (
        <>
            <p>Hola soy Add Contact</p>
            <Link to="/">
                <button>Volver</button>
            </Link>
        </>
    );
}

