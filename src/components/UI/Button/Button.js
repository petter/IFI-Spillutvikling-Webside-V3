import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classes from './Button.css';

const button = (props) => {
    if (props.link) {
        return (
            <Link className={classes.Button} to={props.href} style={props.style}>{props.children}</Link>
        );
    } else {
        return (
            <button className={classes.Button} onClick={props.onClick} style={props.style}>{props.children}</button>
        )
    }

};

button.propTypes = {
    onClick: PropTypes.func,
    to: PropTypes.string,
    link: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
        PropTypes.node,
    ]),
}

export default button;