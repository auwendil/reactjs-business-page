/**
 * Created by antares on 22.02.2023
 */

import styles from './OfferItem.module.scss';

import React from 'react';

function OfferItem(props) {
    return (
        <div className={styles.item}>
            <i className={props.iconClasses}></i>
            <h3>{props.children}</h3>
        </div>
    );
}

OfferItem.propTypes = {};

export default OfferItem;