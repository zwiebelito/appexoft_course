export const CREATE_CONTACT = "CREATE_CONTACT"
export const DELETE_CONTACT = "DELETE_CONTACT"
export const DELETE_ALL_CONTACTS = "DELETE_ALL_CONTACTS"

export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact
    }
}

export const deleteContact = (contact) => {
    return {
        type: DELETE_CONTACT,
        payload: contact
    }
}

export const deleteAllContacts = () => {
    return {
        type: DELETE_ALL_CONTACTS
    }
}