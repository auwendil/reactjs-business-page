/**
 * Created by antares on 20.02.2023
 */

import {greaterThan, breakpoints, smallerOrEqualThan, useMedia} from '../../hooks/MediaQueryHook.jsx';
import UnderlineLinkAnim from '../Effects/Link/UnderlineLinkAnim.jsx';
import Container from '../UI/Container.jsx';
import DesktopNavigation from './DesktopNavigation.jsx';
import MobileNavigation from './MobileNavigation.jsx';
import styles from './Navigation.module.css';

import React from 'react';

function Navigation() {
    const media = useMedia();
    console.log('nav change');
    console.log(media);
    console.log(media.minSm);
    console.log(media.minMd);
    console.log(media.minLg);
    console.log(media.minXl);
    console.log(media.minXxl);
    console.log(media.maxSm);
    console.log(media.maxMd);
    console.log(media.maxLg);
    console.log(media.maxXl);
    console.log(media.maxXxl);

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