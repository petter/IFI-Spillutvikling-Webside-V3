import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Jumbotron from '../../../components/Jumbotron/Jumbotron';
import Styret from '../../../components/Styret/Styret';
//import classes from './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Aux>
                <Jumbotron />
                <Styret />
            </Aux>
        );
    }
}