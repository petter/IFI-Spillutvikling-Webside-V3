import React, { Component } from 'react';

import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Aux from '../../hoc/Aux/Aux';

export default class Navigation extends Component {

    state = {
        sideDrawerOpen: false,
    }

    render() {
        return (
            <Aux>
                <Toolbar onSideDrawerOpen={() => this.setState({ sideDrawerOpen: true })} />
                <SideDrawer sideDrawerOpen={this.state.sideDrawerOpen} onSideDrawerClose={() => this.setState({ sideDrawerOpen: false })} />
            </Aux>
        );
    }
}