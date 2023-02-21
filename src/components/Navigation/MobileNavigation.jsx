/**
 * Created by antares on 20.02.2023
 */

import colors from '../../colors.js';
import UnderlineLinkAnim from '../Effects/Link/UnderlineLinkAnim.jsx';
import BurgerButton from '../UI/Hamburger/BurgerButton.jsx';
import Logo from '../UI/Logo.jsx';
import styles from './MobileNavigation.module.css';

import React, {useState} from 'react';

function MobileNavigation() {
    const [menuOpened, setMenuOpened] = useState(false);

    const clickHandler = () => {
        setMenuOpened(prevClicked => !prevClicked);

        if (menuOpened) {
            console.log('open menu');
        } else {
            console.log('close menu');
        }
    };

    return (
        <nav className={styles.navigation}>
            <Logo className={styles.logo}/>
            <BurgerButton buttonType="hamburger--collapse" active={menuOpened} onClick={clickHandler}></BurgerButton>
            {menuOpened &&
                <div className={styles.navMenu}>
                    <UnderlineLinkAnim className={styles.navLink} href="#">Home</UnderlineLinkAnim>
                    <UnderlineLinkAnim className={styles.navLink} href="#portfolio">Portfolio</UnderlineLinkAnim>
                    <UnderlineLinkAnim className={styles.navLink} href="#aboutus">About us</UnderlineLinkAnim>
                    <UnderlineLinkAnim className={styles.navLink} href="#contact">Contact</UnderlineLinkAnim>
                </div>
            }
        </nav>
    );
}

MobileNavigation.propTypes = {};

export default MobileNavigation;