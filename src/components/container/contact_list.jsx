import React, { useState } from 'react';
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact';

import '../../styles/contact.scss'
import ContactForm from '../pure/forms/contactForm';

const ContactListComponent = () => {

    const defaultContact = new Contact('John', 'Doe', 'jdoe@gmail.com', false);

    const [contacts, setContacts] = useState([defaultContact]);
    const [loading, setLoading] = useState(true);

    function addContact(contact){
        console.log('Add a contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    function removeContact(contact){
        console.log('Delete this contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div  className='card-header p-3'>
                        <h1>
                            Your Contacts:
                        </h1>
                    </div> 
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>First Name</th>
                                    <th scope='col'>Last Name</th>
                                    <th scope='col'>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                { contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent 
                                            key={index} 
                                            contact={contact}
                                            remove={removeContact}
                                        >
                                        </ContactComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ContactForm add={addContact}></ContactForm>
            </div>
        </div>
    );
};


export default ContactListComponent;
