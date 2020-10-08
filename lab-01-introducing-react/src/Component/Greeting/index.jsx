import React from 'react';
import style from './style.css';

const Greeting = props => {
return (
    <h2>Welcome aboard! {props.name}</h2>
);
};

export default Greeting;