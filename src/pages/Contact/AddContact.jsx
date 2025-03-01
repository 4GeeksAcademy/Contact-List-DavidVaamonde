import React, { useState } from 'react'
import useGlobalReducer from '../../hooks/useGlobalReducer.jsx';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const AddContact = () => {

    const {dispatch} = useGlobalReducer();
    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    const navigate = useNavigate();

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
                <h3>Añade contacto</h3>

                <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    value={newContact.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    maxLength={20}
                />

                <input
                    type="email"
                    name="email"
                    value={newContact.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />

                <input
                    type="text"
                    name="phone"
                    value={newContact.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                />

                <input
                    type="text"
                    name="address"
                    value={newContact.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                />

                    <button
                        className='btn bg-white mt-1 me-3'
                        onClick={() => navigate(`/contacts${props.contactId}`)}>
                        Añadir
                    </button>
                </form>
            </div>
            <Link to="/">
                <button className='btn btn-primary'>Volver</button>
            </Link>
        </>
    );
}

