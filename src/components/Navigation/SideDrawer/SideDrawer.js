import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import logo from '../../../assets/img/IconBlack.svg';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    let backdrop = null;
    const sideDrawerClasses = [classes.SideDrawer];
    if (props.sideDrawerOpen) {
        backdrop = <Backdrop onClick={props.onSideDrawerClose} />;
        sideDrawerClasses.push(classes.Open);
    }

    return (
        <Aux>
            <div className={sideDrawerClasses.join(' ')}>
                <Link to="/" className={classes.LogoLink}>
                    <img src={logo} alt="IFI Spillutvikling logo" className={classes.NavLogo} />
                </Link>
                <NavigationItems onClick={props.onSideDrawerClose} className={classes.NavItems} navItemClassName={classes.NavItem} />
            </div>
            {backdrop}
        </Aux>
    );
};

export default sideDrawer;