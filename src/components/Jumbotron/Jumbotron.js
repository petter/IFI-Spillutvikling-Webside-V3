import React from 'react';
import PropTypes from 'prop-types';

import Button from '../UI/Button/Button';
import classes from './Jumbotron.css';

const jumbotron = (props) => {
    return (
        <div className={classes.Jumbotron} id="jumbotron">
            <div className={classes.JumbotronContent}>
                <h2 className={classes.JumbotronTitle}>IFI Spillutvikling</h2>
                <p className={classes.JumbotronBody}>IFI Spillutvikling er en forening ved Institutt for Informatikk, Universitetet i Oslo for alle studenter som har et ønske om, eller en interesse for, å utvikle spill, uansett erfaring.</p>
                <Button href="/blimedlem">Bli medlem</Button>
            </div>
        </div>
    );
};

jumbotron.propTypes = {

}

export default jumbotron;