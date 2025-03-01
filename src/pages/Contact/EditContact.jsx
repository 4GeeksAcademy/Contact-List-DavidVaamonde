import React from 'react'
import { Link } from "react-router-dom";

export const EditContact = () => {
    return(
        <div>
            <p>Hola, soy EditContact</p>
            <Link to="/">
                <button>Volver</button>
            </Link>
        </div>
    )
}