/**
 * Created by antares on 22.02.2023
 */

import styles from './Main.module.css';

import React from 'react';
import AboutUsSection from './Sections/AboutUsSection.jsx';
import ContactSection from './Sections/ContactSection.jsx';
import OffersSection from './Sections/OffersSection.jsx';

function Main() {
    return (
        <main>
            <OffersSection></OffersSection>
            <AboutUsSection></AboutUsSection>
            <ContactSection></ContactSection>
        </main>
    );
}

Main.propTypes = {};

export default Main;