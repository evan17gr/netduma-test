import React, {
    useState,useEffect
} from 'react'

const AddContact = () =>
{
    const [firstName, setFirstName] = useState( "" );
    const [otherNames, setOtherNames] = useState( "" );
    const [email, setEmail] = useState( "" );
    const [phoneNumber, setPhoneNumber] = useState( "" );
    const [street, setStreet] = useState( "" );
    const [town, setTown] = useState( "" );
    const [country, setCountry] = useState( "" );

    let contacts = {};
    let id = 0;

    const getData = (e) => {
        e.preventDefault();
        console.log( firstName );
        if ( ( firstName === "" ) || ( otherNames === "" ) || ( email === "" ) || ( phoneNumber === "" ) || (street === "") || (town === "") || (country === ""))
        {
            alert( "Please fill in all the fields" );
        }
        if ( /[^a-zA-Z]/.test( firstName ) )
        {
            alert("Please only use letters for your name")
        }
        if ( /[^a-zA-Z]/.test( otherNames ) )
        {
            alert("Please only use letters for your other names")
        }
        
        if ( /[^a-zA-Z]/.test( town ) )
        {
            alert("Please enter a vaild town")
        }
        if ( /[^a-zA-Z]/.test( country ) )
        {
            alert("Please enter a valid country")
        }

        contacts.firstName = firstName;
        contacts.otherNames = otherNames;
        contacts.email = email;
        contacts.phoneNumber = phoneNumber;
        contacts.street = street;
        contacts.town = town;
        contacts.country = country;
        contacts.id = id;

        let allContacts = JSON.parse( localStorage.getItem( "contacts" ) ) || [];
        allContacts.push( contacts );


        localStorage.setItem( "contacts", JSON.stringify( allContacts ) );

        id++;
    }

    return (
        <div>
            addcontact
            <form>
            <input placeholder="First name
" onChange={e => setFirstName(e.target.value)}></input>
            <input placeholder="Other names
" onChange={e => setOtherNames(e.target.value)}></input>
            <input type="email" placeholder="Email address" onChange={e => setEmail(e.target.value)}></input>
            <input type="tel" placeholder="Telephone number" onChange={e => setPhoneNumber(e.target.value)}></input>
            <h2>Address</h2>
            <input placeholder="Street
" onChange={e => setStreet(e.target.value)}></input>
            <input placeholder="Town
" onChange={e => setTown(e.target.value)}></input>
                <input placeholder="Country" onChange={e => setCountry(e.target.value)}></input>
                <button onClick={getData} >Add the contact</button>
            </form>
        </div>
    )
}

export default AddContact
