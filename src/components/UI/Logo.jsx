/**
 * Created by antares on 20.02.2023
 */

import UnderlineLinkAnim from '../Effects/Link/UnderlineLinkAnim.jsx';
import styles from './Logo.module.scss';
import logo from '../../assets/logo.svg';

import React from 'react';

function Logo(props) {
    return (
        <>
            <a className={`${styles.logo} ${props.className}`} href="#">
                <img src={logo} alt="Company logo image"/>
                <UnderlineLinkAnim><span className={styles.companyName}>COMPANY NAME</span></UnderlineLinkAnim>
            </a>
        </>
    );
}

Logo.propTypes = {};

export default Logo;