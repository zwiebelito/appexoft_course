import React, { Component } from "react";

export default class ContactBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            newContact: {
                name: '',
                phone: '',
            }
        }
    }

    handleInputChange = (e)=>{
        const {name, value} = e.target;
        this.setState((prevState)=>({
            newContact: {
                ...prevState.newContact,
                [name]: value,
            }
        }))
    }

    addContact = ()=>{
        this.setState((prevState)=>({
            contacts: [...prevState.contacts, prevState.newContact],
            newContact: {
                name: '',
                phone: '',
            }
        }))
    }


    removeContact = (index)=>{
        this.setState((prevState)=>({
            contacts: prevState.contacts.filter((_, i)=>i!==index)
        }))
    }

    render() {
        const {contacts, newContact} = this.state;
        return <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4">Contacts Book</h1>
            <ul>
                {contacts.map((contact, index)=>(
                    <li key={index} className="mb-2 flex items-center justify-between">
                        {contact.name} - {contact.phone}
                        <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onClick={()=>this.removeContact(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <h2 className=" text-lg font-bold mb-2">Add new contact</h2>
                <label className="block mb-2">Name:
                    <input type="text" className="border border-gray-300 p-2 w-full rounded" name="name" value={newContact.name} onChange={this.handleInputChange}/>
                </label>
                <label className="block mb-2">Phone:
                    <input type="text" className="border border-gray-300 p-2 w-full rounded" name="phone" value={newContact.phone} onChange={this.handleInputChange}/>
                </label>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={this.addContact}>Add Contact</button>
            </div>
        </div>;
    }
}
