import React from "react";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import DeleteContact from "./pages/DeleteContact";
import SearchContact from "./pages/SearchContact";

function App() {
  return (
    <Router>
            <h1>Welcome to your address book!!!</h1>
            <button><Link to="/addcontact">Add a Contact</Link></button>
            <button><Link to="/deletecontact">Delete a Contact</Link></button>
            <button><Link to="/searchcontact">Search for a Contact</Link></button>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/addcontact" component={AddContact}/>
        <Route path="/deletecontact" component={DeleteContact}/>
        <Route path="/searchcontact" component={SearchContact}/>
      </Switch>
    </Router>
  );
}

export default App;
