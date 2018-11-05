import React from 'react';
import { faDiscord, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import Container from '../UI/Container/Container';
import FontAwesomeLink from '../UI/FontAwesomeLink/FontAwesomeLink';
import classes from './Footer.css';
const footer = (props) => {
    return (
        <footer className={classes.Footer}>
            <Container className={classes.Container}>
                <div className={classes.SocialLinks}>
                    <FontAwesomeLink to="https://discord.gg/cSTfD6h" icon={faDiscord} transform="down-1" />
                    <FontAwesomeLink to="https://www.facebook.com/ifispillutvikling/" icon={faFacebook} />
                    <FontAwesomeLink to="https://github.com/pettersmoen/IFI-Spillutvikling-Webside-V3" icon={faGithub} />
                </div>
            </Container>
        </footer>
    );
};

export default footer;