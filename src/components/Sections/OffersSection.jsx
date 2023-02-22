/**
 * Created by antares on 22.02.2023
 */

import HeaderSection from '../HeaderSection.jsx';
import Container from '../UI/Container.jsx';
import OfferItem from './OfferItem.jsx';
import styles from './OffersSection.module.scss';

import React from 'react';

function OffersSection() {
    return (
        <section id="offers">
            <Container>

                <HeaderSection>Our offer</HeaderSection>


                <div className={styles.itemsContainer}>

                    <OfferItem iconClasses="ti ti-device-desktop">optimizing</OfferItem>
                    <OfferItem iconClasses="ti ti-bug-off">removing viruses</OfferItem>
                    <OfferItem iconClasses="ti ti-access-point">fix network</OfferItem>
                    <OfferItem iconClasses="ti ti-brand-windows">system installation</OfferItem>
                    <OfferItem iconClasses="ti ti-apps">apps installation</OfferItem>

                </div>


            </Container>
        </section>
    );
}

OffersSection.propTypes = {};

export default OffersSection;