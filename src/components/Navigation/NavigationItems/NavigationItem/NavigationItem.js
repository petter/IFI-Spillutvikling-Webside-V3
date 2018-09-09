import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = (props) => {
    const classNames = [classes.NavigationItem];
    if (props.className) classNames.push(props.className);

    return (
        <NavLink onClick={props.onClick} className={classNames.join(' ')} activeClassName={classes.Active} to={props.to} exact>{props.children}</NavLink>
    );
};

navigationItem.propTypes = {
    to: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
}

export default navigationItem;