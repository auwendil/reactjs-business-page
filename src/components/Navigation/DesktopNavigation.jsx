/**
 * Created by antares on 20.02.2023
 */

import UnderlineLinkAnim from '../Effects/UnderlineLinkAnim.jsx';
import Container from '../UI/Container.jsx';
import Logo from '../UI/Logo.jsx';
import styles from './DesktopNavigation.module.css';

import React from 'react';

function DesktopNavigation() {
    return (
        <Container className={styles.navigation}>
            <Logo/>
            <nav className={styles.nav}>
                <UnderlineLinkAnim className={styles.navLink} href="#">Home</UnderlineLinkAnim>
                <UnderlineLinkAnim className={styles.navLink} href="#portfolio">Portfolio</UnderlineLinkAnim>
                <UnderlineLinkAnim className={styles.navLink} href="#aboutus">About us</UnderlineLinkAnim>
                <UnderlineLinkAnim className={styles.navLink} href="#contact">Contact</UnderlineLinkAnim>
            </nav>
        </Container>
    );
}

DesktopNavigation.propTypes = {};

export default DesktopNavigation;