/**
 * Created by antares on 20.02.2023
 */

import styles from './UnderlineLinkAnim.module.css';

import React from 'react';

function UnderlineLinkAnim(props) {
    return (
        <div className={`${styles.link} ${props.className}`}>
            <a href={props.href}>{props.children}</a>
        </div>
    );
}

UnderlineLinkAnim.propTypes = {};

export default UnderlineLinkAnim;