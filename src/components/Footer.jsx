/**
 * Created by antares on 22.02.2023
 */

import styles from './Footer.module.scss';

import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p> &copy; Company Name {currentYear}</p>
            <a className={styles.anchor} href="#"><i className="ti ti-arrow-big-up-line-filled"></i></a>
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;