import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

var HelloWorld = (name) => {
    return "Hello sds121" + name;
}

render(
    <App />,
    document.getElementById('container'))


