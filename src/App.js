import {useState} from "react";
import {Routes, Route, useNavigate, Navigate} from "react-router-dom";
import {AddContact, EditContact, Contacts, Contact, Navbar} from "./components";

import './App.css';

const App = () => {

    const [getLoading, setLoading] = useState(false);
    const [getContacts, setContacts] = useState([]);

    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Navigate to={"/contacts"} />}></Route>
                <Route path="/contacts" element={<Contacts contacts = {getContacts} loading = {getLoading}></Contacts>}></Route>
                <Route path="/contacts/add" element={<AddContact/>}></Route>
                <Route path="/contacts/:contactId" element={<Contact/>}></Route>
                <Route path="/contacts/edit/:contactId" element={<EditContact/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
