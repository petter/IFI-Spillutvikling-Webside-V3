import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.css';

const button = (props) => {
    return (
        <Link className={classes.Button} to={props.href}>{props.children}</Link>
    );
};

export default button;