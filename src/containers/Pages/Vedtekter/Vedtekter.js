import React from 'react';
import { connect } from 'react-redux';
import Container from '../../../components/UI/Container/Container';

import classes from './Vedtekter.css';

const vedtekter = (props) => {
    const classNames = [classes.Level1, classes.Level2, classes.Level3];
    const vedtekter = objToVedtekter(props.vedtekter, classNames);
    return (
        <Container>
            <h1>Vedtekter</h1>
            {vedtekter}
        </Container>
    );
}

const objToVedtekter = (vedtekter, classNames = []) => {

    const vedtektRecur = (element, level = 0, key = "") => {
        let children = null;
        if (element.children) {
            const childMap = element.children.map((el, index) => vedtektRecur(el, level + 1, key + "-" + index));
            children = (<ol className={[classes.VedtekterList, classNames[level + 1]].join(' ')}>{childMap}</ol>);
        }

        const liClass = [classes.VedtektItem];
        if (classNames[level])
            liClass.push(classNames[level]);

        return (
            <li key={key} className={liClass.join(' ')}>
                {element.text}
                {children}
            </li>
        );
    }

    const vedtektJsx = vedtekter.map((el, index) => {
        return vedtektRecur(el, 0, index + "");
    });

    return (
        <ol className={[classes.VedtekterList, classNames[0]].join(' ')}>
            {vedtektJsx}
        </ol>
    );

}


const mapStateToProps = state => {
    return {
        vedtekter: state.vedtekter,
    }
}

export default connect(mapStateToProps)(vedtekter);