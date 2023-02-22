/**
 * Created by antares on 22.02.2023
 */

import styles from './HeaderSection.module.scss';

import React from 'react';

function HeaderSection(props) {
    return (
        <h2 className={styles.headerSection}>{props.children}</h2>
    );
}

HeaderSection.propTypes = {};

export default HeaderSection;