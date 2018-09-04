import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = (props) => {
    return (
        <NavLink className={classes.NavigationItem} activeClassName={classes.Active} to={props.to} exact>{props.children}</NavLink>
    );
};

navigationItem.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
}

export default navigationItem;