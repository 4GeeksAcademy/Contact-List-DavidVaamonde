import React, { useState } from 'react'
import { Link } from "react-router-dom";

export const ViewContacts = () => {


    return(
        <>
            <p>Hola soy ViewContacts</p>
            <Link to="/">
                <button>Volver</button>
            </Link>
        </>
    )
}
