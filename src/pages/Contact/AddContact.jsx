import React, { useState } from 'react'
import useGlobalReducer from '../../hooks/useGlobalReducer.jsx';
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";

export const AddContact = () => {

    const {dispatch} = useGlobalReducer();
    const navigate = useNavigate();

    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleChange = (e) => {
        setNewContact({
            ...newContact,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const response = await fetch('https://playground.4geeks.com/contact/agendas/davidvb/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newContact)
            });

            if (!response.ok) {
                throw new Error(`Error al añadir el contacto: ${response.status}`);
            }

            console.log("Post OK: "+response.ok);
            console.log("Post Status: "+response.status);

            const data = await response.json();
            console.log("Contacto añadido: "+data);

            dispatch({ type: 'addContact', payload: data.contact });

            navigate('/contacts');

        } catch (error) {
            console.log("Hay un problema al añadir un contacto: ", error);
        }
    }

    return (
        <>
            <div className='container'>
                <h3>Añade un nuevo contacto</h3>

                <form onSubmit={handleSubmit}>

                <p>
                    <label>Nombre completo:</label>
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={newContact.name}
                        onChange={handleChange}
                        placeholder="Añade nombre y apellidos..."
                        className='form-control'
                        required
                        
                    />
                </p>
                
                <p>
                    <label>Correo electrónico:</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={newContact.email}
                        onChange={handleChange}
                        placeholder="Añade un correo electrónico..."
                        className='form-control'
                        required
                        
                    />
                </p>

                <p>
                    <label>Teléfono: </label>
                    <br />
                    <input
                        type="text"
                        name="phone"
                        value={newContact.phone}
                        onChange={handleChange}
                        placeholder="Añade un teléfono..."
                        className='form-control'
                        required
                        
                    />
                </p>

                <p>
                    <label>Dirección: </label>
                    <br />
                    <input
                        type="text"
                        name="address"
                        value={newContact.address}
                        onChange={handleChange}
                        placeholder="Añade una dirección..."
                        required
                        className='form-control'
                    />
                </p>

                    <button
                        className='btn btn-success mt-1 me-3'
                        onClick={() => navigate(`/contacts${props.contactId}`)}>
                        Añadir
                    </button>
                </form>
            </div>
            <Link to="/">
                <button className='btn btn-primary mt-3 ms-3'>Volver</button>
            </Link>
        </>
    );
}

