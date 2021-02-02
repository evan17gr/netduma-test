import React, {
    useEffect,useState
} from 'react'

const DeleteContact = () =>
{
    const [contacts, setContacts] = useState( [] );

    useEffect( () =>
    {
        let list = JSON.parse( localStorage.getItem( "contacts" ) ); 
        setContacts( [...list] );
        console.log( contacts );
    },[] );

    return (
        <div>
            {contacts.map( (contact) =>
            {
                <div>
                    <h1>Name: {contact.firstName}</h1>
                    <h1>Other Names: {contact.otherNames}</h1>
                    <h1>Email: { contact.email}</h1>
                    <h1>Phone Number: {contact.phoneNumber}</h1>
                    <p>Address</p>
                    <h1>Street: { contact.street}</h1>
                    <h1>Town: { contact.town}</h1>
                    <h1>Country: {contact.country}</h1>
                    <button>Delete contact</button>
                </div>
                
            })}
        </div>
    )
}

export default DeleteContact
