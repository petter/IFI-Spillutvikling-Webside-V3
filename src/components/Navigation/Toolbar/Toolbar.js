import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
import Color from 'color';

import NavigationItems from '../NavigationItems/NavigationItems';
import logo from '../../../assets/img/IconWhite.svg';
import classes from './Toolbar.css';

class Toolbar extends PureComponent {

    state = {
        logoOpacity: 0,
        bgColor: '',
    }



    isHome = () => this.props.location.pathname === '/';

    componentDidMount = () => {
        this.setState({ bgColor: $("#toolbar").css('backgroundColor') });

        // Only fade in toolbar on homepage
        if (this.isHome()) {
            $('#toolbar').delay(300).fadeIn(1000);
        }
        window.onscroll = () => {
            if (this.isHome()) {
                // Opacity will start changing when closing bottom of jumbo.
                const jumboBottomPos = $("#jumbotron").offset().top + $("#jumbotron").outerHeight();
                let opacity = (window.scrollY - jumboBottomPos + 150 * 1.5) / 150;
                opacity = Math.max(opacity, 0);
                opacity = Math.min(opacity, 1);
                this.setState({ logoOpacity: opacity });
            }
        }

    }

    render = () => {
        // Don't display toolbar on homepage, it will fade in, will only run once.
        let navBarStyle = { display: "none" };

        // After first render bgColor will be set.
        if (this.state.bgColor !== '') {
            navBarStyle = { backgroundColor: Color(this.state.bgColor).alpha(this.state.logoOpacity) }
        }


        let logoStyle = { display: "none", opacity: this.state.logoOpacity };
        if (this.state.logoOpacity > 0) {
            logoStyle = { ...logoStyle, display: "block" };
        }

        if (!this.isHome()) {
            navBarStyle = {};
            logoStyle = {};
        }

        console.log(navBarStyle);
        return (
            <nav className={classes.Nav} id="toolbar" style={navBarStyle}>
                <Link to="/" style={logoStyle} id="LogoLink" className={classes.LogoLink}>
                    <img src={logo} alt="IFI Spillutvikling logo" className={classes.NavLogo} />
                </Link>
                <NavigationItems />
            </nav>
        );
    }
}

export default withRouter(Toolbar);