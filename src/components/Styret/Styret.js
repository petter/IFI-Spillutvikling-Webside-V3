import React from 'react';
import { connect } from 'react-redux';

import Container from '../UI/Container/Container';
import classes from './Styret.css';

const styret = (props) => {



    const medlemmer = props.styremedlemmer.map((el, index) => {
        return (
            <div key={el.email} className={classes.Styremedlem}>
                <div className={classes.StyremedlemImage} style={{ backgroundImage: "url(" + el.image + ")" }}></div>
                <h3 className={classes.StyremedlemName}>{el.name}</h3>
                <p className={classes.StyremedlemRole}>{el.role}</p>
                <a href={"mailto:" + el.email} className={classes.StyremedlemEmail}>{el.email}</a>
            </div>
        );
    });

    return (
        <Container>
            <h1 className={classes.StyremedlemTitle}>Styret</h1>
            <div className={classes.StyremedlemWrapper}>
                {medlemmer}
            </div>
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        styremedlemmer: state.styremedlemmer,
    }
}

// const mapDispatchToProps = 

export default connect(mapStateToProps)(styret);