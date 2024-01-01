import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, deleteAllContacts } from './contact-actions';
import {Button, IconButton, Stack} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ContactList = () => {
    const dispatch = useDispatch();
    const {contacts} = useSelector((state) => state.contacts);

    const handleAddContact = () => {
        const newContact = prompt('Enter new contact');
        if (newContact === ''){
            alert('the field is empty, try again')
        } else {
            dispatch(addContact({id: Date.now(), text: newContact}));
        }
    };

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContact(contactId));
    };

    const handleDeleteAllContacts = () => {
        dispatch(deleteAllContacts());
    };

    return (
        <div>
            <h1 style={{color: 'darkslateblue'}}>Contact List</h1>
            <ul>
                {contacts.map(contact => {
                    const {id, text} = contact;
                    return <li style={{listStyle: 'counter'}} key={id}>
                        {text}
                        <IconButton aria-label="delete" color="error" onClick={()=> handleDeleteContact(id)} size="small">
                            <DeleteIcon />
                        </IconButton>
                    </li>
                })}
            </ul>
            <Stack direction="row" spacing={2}>
                <Button onClick={handleAddContact} color="success"  size='small' variant="contained">Add contact</Button>
                {contacts.length > 0 && <Button onClick={handleDeleteAllContacts} variant="outlined" size="small" color="error" endIcon={<DeleteIcon />}>
                    Delete all contacts
                </Button>}
            </Stack>
        </div>
    );
};

export default ContactList;