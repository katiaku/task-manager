import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import StateComponent from './state';

import '../../styles/contact.scss'

const ContactComponent = ({ contact, add, remove }) => {

    useEffect(() => {
        console.log('Contact Created')
        return () => {
            console.log(`Contact: ${contact.name} is going to unmount`);
        };
    }, [contact]);

    return (
        <div>
            <tr className='fw-normal'>
                <th>
                    <span className='ms-2'>{contact.firstName}</span>
                </th>
                <td className='align-middle'>
                    <span>{contact.lastName}</span>
                </td>
                <td className='align-middle'>
                    <span>{contact.email}</span>
                </td>
                <td className='align-middle'>
                    <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(contact)}></i>
                </td>
            </tr>
            <StateComponent state={ true }></StateComponent>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
