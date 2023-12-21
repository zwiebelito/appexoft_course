import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

const Contact = () => {
    const contacts = useSelector((tasks) => tasks.contacts)
    useEffect(()=> {
        console.log(contacts, 'selector')
    }, [contacts])
    return (
        <div>

        </div>
    );
};

export {Contact};