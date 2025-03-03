import React, { useEffect, useState } from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const EditContact = () => {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    //loading: para mostrar un mensaje mientras esperamos
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const [currentContact, setCurrentContact] = useState({});

    useEffect(() => {

        const fetchContact = () => {

            if (store.contacts) {
                let storeContact = store.contacts.find(contact => contact.id === Number(id))


                setCurrentContact(storeContact);
                setLoading(false);
            }
        };
        fetchContact();
    }, []);

    const handleEdit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/davidvb/contacts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentContact)

            });

            navigate("/contacts");

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log("Put OK: "+response.ok);
            console.log("PUT Status: "+response.status);

        } catch (error) {
            console.error("Hubo un problema con la solicitud:", error);
        }


    };

    const handleChange = (e) => {
        setCurrentContact({
            ...currentContact,
            [e.target.name]: e.target.value
        });
    };

    //Si está cargando, muestra el spinner de cargando
    if (loading) {
        return(
            <div className='d-flex justify-content-center'>
                <div className='spinner-border text-primary' role='status'>
                    <span className='visually-hidden'>Cargando...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <h2>Editar contacto nº {currentContact.id}</h2>
            <form onSubmit={handleEdit}>

                <p>
                    <label>Nombre completo:</label>
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={currentContact.name}
                        onChange={handleChange}
                        placeholder="Añade un nombre..."
                        required
                        maxLength={20}
                        className="form-control"
                    />
                </p>
                
                <p>
                    <label>Correo electrónico:</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={currentContact.email}
                        onChange={handleChange}
                        placeholder="Añade un correo electrónico..."
                        required
                        className="form-control"
                    />
                </p>
                
                <p>
                    <label>Teléfono: </label>
                    <br />
                    <input
                        type="text"
                        name="phone"
                        value={currentContact.phone}
                        onChange={handleChange}
                        placeholder="Añade un número de teléfono..."
                        required
                        className="form-control"
                    />
                </p>
                
                <p>
                    <label>Dirección:</label>
                    <br />
                    <input
                        type="text"
                        name="address"
                        value={currentContact.address}
                        onChange={handleChange}
                        placeholder="Añade una dirección..."
                        required
                        className="form-control"
                    />
                </p>
                
                <button
                    className="btn btn-success my-1 mx-3"
                    onClick={() => navigate(`/contacts/${contact.id}`)}>
                        Aceptar
                </button>
            </form>
            <Link to="/">
                <button className='btn btn-primary mt-3 ms-3'>Volver a Home</button>
            </Link>
        </div>
    );
};
