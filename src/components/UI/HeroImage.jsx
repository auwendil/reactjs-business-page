/**
 * Created by antares on 21.02.2023
 */

import styles from './HeroImage.module.scss';

import React from 'react';

function HeroImage(props) {
    const withShadow = props.withShadow ? true : false;
    const shadowAlpha = props.shadowAlpha ? props.shadowAlpha : 0.75;

    return (
        <div className={styles.image} style={{
            backgroundImage: `url(${props.image})`,
        }}>
            {withShadow &&
                <div className={styles.shadow} style={{backgroundColor: `rgba(0,0,0,${shadowAlpha})`}}></div>}
        </div>
    );
}

HeroImage.propTypes = {};

export default HeroImage;