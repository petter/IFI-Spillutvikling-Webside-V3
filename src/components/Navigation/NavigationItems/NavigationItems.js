import React from 'react';
import PropTypes from 'prop-types';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => {
    const wrapperClasses = [classes.NavigationItems];
    if (props.className) wrapperClasses.push(props.className);
    return (
        <div className={wrapperClasses.join(' ')}>
            <NavigationItem onClick={props.onClick} className={props.navItemClassName} to="/">Hjem</NavigationItem>
            <NavigationItem onClick={props.onClick} className={props.navItemClassName} to="/vedtekter">Vedtekter</NavigationItem>
            <NavigationItem onClick={props.onClick} className={props.navItemClassName} to="/ressurser">Ressurser</NavigationItem>
            <NavigationItem onClick={props.onClick} className={props.navItemClassName} to="/blimedlem">Bli medlem</NavigationItem>
        </div>
    );
};

navigationItems.propTypes = {
    className: PropTypes.string,
    navItemClassName: PropTypes.string,
    onClick: PropTypes.func,
}

export default navigationItems;