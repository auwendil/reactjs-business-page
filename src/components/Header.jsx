/**
 * Created by antares on 21.02.2023
 */

import useMedia from '../hooks/MediaQueryHook.jsx';
import styles from './Header.module.scss';

import desktopImage from '../assets/img/header-desktop.jpg';
import phoneImage from '../assets/img/header-phone.jpg';

import React from 'react';
import Container from './UI/Container.jsx';
import HeroImage from './UI/HeroImage.jsx';

function Header() {
    const media = useMedia();

    return (
        <header className={styles.header}>
            {
                media.minMd
                    ? <HeroImage image={phoneImage} withShadow/>
                    : <HeroImage image={desktopImage} withShadow/>
            }

            <Container className={styles.companyInfo}>
                <h1>COMPANY NAME</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eum facere facilis illum laborum
                    laudantium nemo</p>
            </Container>
        </header>
    );
}

Header.propTypes = {};

export default Header;