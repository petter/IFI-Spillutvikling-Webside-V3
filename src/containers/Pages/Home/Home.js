import React, { Component } from 'react';

import Jumbotron from '../../../components/Jumbotron/Jumbotron';
import Styret from '../../../components/Styret/Styret';
import classes from './Home.css';
import Aux from '../../../hoc/Aux/Aux';

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