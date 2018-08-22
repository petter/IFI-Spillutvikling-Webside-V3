import React from 'react';

import classes from './Styret.css';

const styret = (props) => {

    const medlemmerData = [
        {
            name: "Sivert Schou Olsen",
            image: "https://i.imgur.com/bSPVFxl.jpg",
            role: "Leder",
            email: "siverto@ifi.uio.no",
        }, {
            name: "Petter Sæther Moen",
            image: "https://i.imgur.com/69X4Q4J.jpg",
            role: "Nestleder",
            email: "pettesm@ifi.uio.no",
        }, {
            name: "Nicolai Rønning",
            image: "",
            role: "PR-Ansvarlig",
            email: "nicolr@ifi.uio.no",
        }, {
            name: "Vemund Justnes",
            image: "https://i.imgur.com/qRQTVk5.jpg",
            role: "Økonomiansvarlig",
            email: "vemundju@ifi.uio.no",
        }
    ]

    const medlemmer = medlemmerData.map((el, index) => {
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
        <div className={classes.Container}>
            <h1 className={classes.StyremedlemTitle}>Styret</h1>
            <div className={classes.StyremedlemWrapper}>
                {medlemmer}
            </div>
        </div>
    );
};

export default styret;