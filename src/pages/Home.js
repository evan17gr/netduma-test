import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to your address book!!!</h1>
            <button><Link to="/addcontact">Add a Contact</Link></button>
            <button><Link to="/deletecontact">Delete a Contact</Link></button>
            <button><Link to="/searchcontact">Search for a Contact</Link></button>
        </div>
    )
}

export default Home
