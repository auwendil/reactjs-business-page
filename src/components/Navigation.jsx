/**
 * Created by antares on 20.02.2023
 */

import UnderlineLinkAnim from './Effects/UnderlineLinkAnim.jsx';
import Container from './UI/Container.jsx';
import styles from './Navigation.module.css';

import React from 'react';
import Logo from './UI/Logo.jsx';

function Navigation() {
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

Navigation.propTypes = {};

export default Navigation;