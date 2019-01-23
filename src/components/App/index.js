import React from 'react';
import Header from '../Header';
import LookupManager from '../LookupManager';
import './App.css';

const app = () => (
  <>
    <Header title='Toronto Waste Lookup'></Header>
    <div className='__app'>
      <LookupManager></LookupManager>
    </div>
  </>
);

export default app;
