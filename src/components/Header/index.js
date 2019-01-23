import React from 'react';
import './Header.css';

const header = (props) => (
    <div className='__header-container'>
        <h1 className='__header-title'>{props.title}</h1>
    </div>
);

export default header;