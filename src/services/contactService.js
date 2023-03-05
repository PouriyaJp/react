import axios from "axios";
import contact from "../components/Contacts/Contact";

const SERVER_URL = "http://localhost:9000";

// @desc Get All Contact
// @desc Get http://localhost:9000/contacts
export const getAllContacts = () => {
    const url = `${SERVER_URL}/contacts`;
    return axios.get(url);
}

// @desc Get Contact With Contact ID
// @desc Get http://localhost:9000/contacts/:contactId
export const getContact = (contactId) =>{
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.get(url);
}

// @desc  Get All Groups
// @route GET http://localhost:9000/groups
export const getAllGroups = () => {
    const url = `${SERVER_URL}/groups`;
    return axios.get(url);
}

// @desc  Get Group Name With Group ID
// @route GET http://localhost:9000/groups/:groupId
export const getGroup = (groupID) => {
    const url = `${SERVER_URL}/groups/${groupID}`;
    return axios.get(url);
}

// @desc  Create New Contact
// @route POST http://localhost:9000/contacts
export const createContact = (contact) => {
    const url = `${SERVER_URL}/contacts`;
    return axios.post(url,contact);
}

// @desc  Update Contact
// @route PUT http://localhost:9000/contacts/:contactId
export const updateContact = (contact, contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.put(url, contact);
}

// @desc  Delete Contact
// @route DELETE http://localhost:9000/contacts/:contactId
export const deleteContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.delete(url);
}