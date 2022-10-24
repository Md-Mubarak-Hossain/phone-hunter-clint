import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import Phone from './Phone';


const Phones = () => {
    const phones = useLoaderData();
    // console.log(phones)
    return (
        <div>

            <h4>Total phones= {phones.length}</h4>
            <div className='phone-container'>

                {
                    phones.map(ph => <Phone key={ph.id}
                        ph={ph}
                    ></Phone>)
                }
            </div >
        </div>
    );
};

export default Phones;