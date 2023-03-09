import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';

const ContactForm = ({add}) => {

    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            firstNameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
        );
        add(newContact);
    }

    return (
        <div>
            <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mt-2'>
                <div className='form-outline flex-fill'>
                    <input ref={firstNameRef} id='inputFirstName' type='text' className='form-control form-control-lg' required autoFocus placeholder='First Name'/>
                    <input ref={lastNameRef} id='inputLastName' type='text' className='form-control form-control-lg my-2' required placeholder='Last Name'/>
                    <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='Email'/>
                </div>
            </form>
            <button type='submit' className='btn btn-success btn-lg mt-2 w-100'>Add</button>
        </div>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;
