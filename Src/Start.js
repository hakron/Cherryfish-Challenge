import React from 'react';
import ReactDOM from 'react-dom';

// <=====src=======>

import RegisterForm from './Containers/RegisterForm';

const main = document.querySelector('main')

const elem =
    <div>
      <RegisterForm/>
    </div>

ReactDOM.render(elem, main);
