/**
 * Created by antares on 20.02.2023
 */

import colors from '../../breakpoints.js';
import UnderlineLinkAnim from '../Effects/Link/UnderlineLinkAnim.jsx';
import BurgerButton from '../UI/Hamburger/BurgerButton.jsx';
import Logo from '../UI/Logo.jsx';
import styles from './MobileNavigation.module.scss';

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
                    <UnderlineLinkAnim className={styles.navLink} href="#"><span
                        onClick={clickHandler}>Home</span></UnderlineLinkAnim>
                    <UnderlineLinkAnim className={styles.navLink} href="#offers"><span
                        onClick={clickHandler}>Offers</span></UnderlineLinkAnim>
                    <UnderlineLinkAnim className={styles.navLink} href="#about-us"><span
                        onClick={clickHandler}>About us</span></UnderlineLinkAnim>
                    <UnderlineLinkAnim className={styles.navLink} href="#contact"><span
                        onClick={clickHandler}>Contact</span></UnderlineLinkAnim>
                </div>
            }
        </nav>
    );
}

MobileNavigation.propTypes = {};

export default MobileNavigation;