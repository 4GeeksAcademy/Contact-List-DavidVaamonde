import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import useGlobalReducer from '../../hooks/useGlobalReducer';
import ContactCard from '../../components/ContactCard';

export const ContactList = () => {

    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch('https://playground.4geeks.com/contact/agendas/Dani');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                dispatch({ type: 'setContacts', payload: data.contacts });
            } catch (error) {
                console.error("Hubo un problema con la solicitud:", error);
            }
        };

        fetchContacts();
    }, []);

    const handleDeleteContact = (contact_id) => {
        dispatch({ type: "deleteContact", payload: contact_id });
    };

    return(
        <>
            <div className="container">

                <h2>Contact List</h2>

                <div className="ContactList">
                    {store.contacts?.length > 0 ? (
                        store.contacts.map((contact, index) => (
                            <div key={index}>
                                <ContactCard
                                    contactName={contact.name}
                                    contactMail={contact.email}
                                    contactPhone={contact.phone}
                                    contactAddress={contact.address}
                                    contactId={contact.id}
                                    onDeleteContact={handleDeleteContact}
                                />
                            </div>
                        ))
                    ) : (
                        <p>No contacts available</p>
                    )}
                </div>
            </div>
            <Link to="/">
                <button className='btn btn-primary'>Volver a Home</button>
            </Link>
        </>
    )
}