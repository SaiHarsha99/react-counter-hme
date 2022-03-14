import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import axios from 'axios'
import moment from 'moment'
import './style.css';
import Counter from './Counter'


const App = () => {
  
  return (
    <>
    <Counter/>
    </>
  )
}

render(<App />, document.getElementById('root'));
