import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import './Phone.css'

const Description = () => {
    const phone = useLoaderData();
    console.log(phone)

    return (
        <div>
            <Link to='/'>Home</Link>
            <div className='description'>
                <h3>Description</h3>
                <p>{phone.id}</p>
                <p>{phone.name}</p>

                <p>{phone.description}</p>
            </div>
        </div>
    );
};

export default Description;