import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

var HelloWorld = (name) => {
    return "Hello sds surendr i am super mandd" + name;
}

render(
    <App />,
    document.getElementById('container'))


