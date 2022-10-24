import React from 'react';
import { Outlet } from 'react-router-dom';
import './Phone.css'

const Main = () => {
    return (

        <div className='header'>
            <div> <h1 className='text'>Phone shop place only for your favourate side</h1></div>
            <Outlet></Outlet>
        </div >
    );
};

export default Main;