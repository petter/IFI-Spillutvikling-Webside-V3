import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = (props) => {
    return (
        <NavLink className={classes.NavigationItem} activeClassName={classes.Active} to={props.to}>{props.children}</NavLink>
    );
};

export default navigationItem;