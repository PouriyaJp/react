import {useState} from "react";
import {AddContact, EditContact, ViewContact, Contacts, Contact, Navbar} from "./components";

import './App.css';

const App = () => {

    const [getLoading, setLoading] = useState(false);
    const [getContacts, setContacts] = useState([]);

    return (
        <div className="App">
            <Navbar></Navbar>
            <Contacts contacts = {getContacts} loading = {getLoading}></Contacts>
        </div>
    );
}

export default App;
