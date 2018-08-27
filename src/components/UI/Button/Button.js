import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classes from './Button.css';

const button = (props) => {
    return (
        <Link className={classes.Button} to={props.href}>{props.children}</Link>
    );
};

button.propTypes = {
    to: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
}

export default button;