import {useState, useEffect} from "react";
import {Routes, Route, useNavigate, Navigate} from "react-router-dom";
import {AddContact, EditContact, Contacts, ViewContact, Navbar} from "./components";

import {createContact, getAllContacts, getAllGroups} from "./services/contactService";

import './App.css';

const App = () => {

    const [getLoading, setLoading] = useState(false);
    const [getForceRender, setForceRender] = useState(false);
    const [getContacts, setContacts] = useState([]);
    const [getGroups, setGroups] = useState([]);
    const [getContact, setContact] = useState({
        fullName: "",
        photo: "",
        mobile: "",
        email: "",
        job: "",
        group: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);

                const { data : contactsData } = await getAllContacts();
                const { data : groupsData } = await getAllGroups();
                setContacts(contactsData);
                setGroups(groupsData);

                setLoading(false);
            }catch (err) {
                console.log(err.message);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);

                const { data : contactsData } = await getAllContacts();

                setContacts(contactsData);

                setLoading(false);
            }catch (err) {
                console.log(err.message);
                setLoading(false);
            }
        }

        fetchData();
    }, [getForceRender]);

    const createContactForm = async (event) =>{
        event.preventDefault();
        try{
            const {status} = await createContact(getContact);

            if (status === 201){
                setContact({});
                setForceRender(!getForceRender);
                navigate("/contacts");
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    const setContactInfo = (event) => {
        setContact({... getContact, [event.target.name] : event.target.value});
    }

    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Navigate to={"/contacts"} />}></Route>
                <Route path="/contacts" element={<Contacts contacts = {getContacts} loading = {getLoading}></Contacts>}></Route>
                <Route path="/contacts/add" element={<AddContact loading = {getLoading} setContactInfo={setContactInfo} contact={getContact} groups={getGroups} createContactForm={createContactForm}/>}></Route>
                <Route path="/contacts/:contactId" element={<ViewContact/>}></Route>
                <Route path="/contacts/edit/:contactId" element={<EditContact/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
