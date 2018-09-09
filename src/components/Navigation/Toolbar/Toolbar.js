import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';
import Color from 'color';

import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerButton from '../../UI/IconButton/HamburgerButton/HamburgerButton';
import logo from '../../../assets/img/IconWhite.svg';
import { isDesktop } from '../../../assets/js/Utils';
import classes from './Toolbar.css';

class Toolbar extends PureComponent {

    state = {
        logoOpacity: 0,
        bgColor: '',
    }

    isHome = () => this.props.location.pathname === '/';

    componentDidMount = () => {
        const calcOpacity = () => {
            if (!(this.isHome() && isDesktop())) return 1;
            // Opacity will start changing when closing bottom of jumbo.
            const jumboBottomPos = $("#jumbotron").offset().top + $("#jumbotron").outerHeight();
            let opacity = (window.scrollY - jumboBottomPos + 150 * 1.5) / 150;
            opacity = Math.max(opacity, 0);
            opacity = Math.min(opacity, 1);
            return opacity;
        }

        this.setState({
            bgColor: $("#toolbar").css('backgroundColor'),
            logoOpacity: calcOpacity(),
        });

        // Only fade in toolbar on homepage
        if (this.isHome() && isDesktop()) {
            $('#toolbar').css('display', 'none');
            $('#toolbar').delay(500).fadeIn({
                duration: 1000,
                start: () => $("#toolbar").css('display', 'flex'),
            });
        }



        window.onscroll = () => {
            if (this.isHome() && isDesktop()) {
                this.setState({ logoOpacity: calcOpacity });
            }
        }

        window.onresize = () => {
            if (this.isHome() && isDesktop()) this.setState({ logoOpacity: calcOpacity() })
            else this.setState({ logoOpacity: 1 });
        }

    }

    render = () => {
        let navBarStyle = {};

        // After first render bgColor will be set.
        if (this.state.bgColor !== '') {
            navBarStyle = { backgroundColor: Color(this.state.bgColor).alpha(this.state.logoOpacity) }
        }


        let logoStyle = { display: "none", opacity: this.state.logoOpacity };
        if (this.state.logoOpacity > 0) {
            logoStyle = { ...logoStyle, display: "block" };
        }

        if (!this.isHome() || !isDesktop()) {
            navBarStyle = {};
            logoStyle = {};
        }

        return (
            <nav className={classes.Nav} id="toolbar" style={navBarStyle}>
                <HamburgerButton onClick={this.props.onSideDrawerOpen} />
                <Link to="/" style={logoStyle} id="LogoLink" className={classes.LogoLink}>
                    <img src={logo} alt="IFI Spillutvikling logo" className={classes.NavLogo} />
                </Link>
                <NavigationItems className={classes.NavItems} />
            </nav>
        );
    }
}

export default withRouter(Toolbar);