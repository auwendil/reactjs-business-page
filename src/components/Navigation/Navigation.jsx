/**
 * Created by antares on 20.02.2023
 */

import {greaterThan, sizes, smallerOrEqualThan, useClosestMedia} from '../../hooks/MediaQueryHook.jsx';
import UnderlineLinkAnim from '../Effects/UnderlineLinkAnim.jsx';
import Container from '../UI/Container.jsx';
import DesktopNavigation from './DesktopNavigation.jsx';
import MobileNavigation from './MobileNavigation.jsx';
import styles from './Navigation.module.css';

import React from 'react';

function Navigation() {
    const media = useClosestMedia();

    return (
        <div className={styles.navigationBg}>
            {greaterThan(media, sizes.md) && <DesktopNavigation/>}
            {smallerOrEqualThan(media, sizes.md) && <MobileNavigation/>}
        </div>
    );
}

Navigation.propTypes = {};

export default Navigation;