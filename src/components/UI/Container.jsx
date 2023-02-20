/**
 * Created by antares on 20.02.2023
 */

import styles from './Container.module.css';

import React from 'react';

function Container(props) {
    return (
        <div className={`${styles.container} ${props.className}`}>
            {props.children}
        </div>
    );
}

Container.propTypes = {};

export default Container;