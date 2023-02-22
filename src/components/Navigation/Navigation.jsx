/**
 * Created by antares on 20.02.2023
 */

import {useMedia} from '../../hooks/MediaQueryHook.jsx';
import DesktopNavigation from './DesktopNavigation.jsx';
import MobileNavigation from './MobileNavigation.jsx';
import styles from './Navigation.module.scss';

import React from 'react';

function Navigation() {
    const media = useMedia();

    return (
        <div className={styles.navigationBg}>
            {
                media.minMd
                    ? <MobileNavigation/>
                    : <DesktopNavigation/>
            }
        </div>
    );
}

Navigation.propTypes = {};

export default Navigation;