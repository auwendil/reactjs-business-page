/**
 * Created by antares on 22.02.2023
 */

// import {Carousel} from 'react-responsive-carousel';
import Carousel from 'react-multi-carousel';
import breakpoints from '../../breakpoints.js';
import useMedia from '../../hooks/MediaQueryHook.jsx';
import styles from './AboutUsSection.module.scss';

import ceoImage from '../../assets/img/team/ceo.jpg';
import ctoImage from '../../assets/img/team/cto.jpg';
import cfoImage from '../../assets/img/team/cfo.jpg';

import React from 'react';
import Slider from 'react-slick';

function AboutUsSection() {
    const media = useMedia();
    const responsive = {
        tablet: {
            breakpoint: {max: breakpoints.lg, min: breakpoints.sm},
            items: 2,
        },
        mobile: {
            breakpoint: {max: breakpoints.sm, min: 0},
            items: 1,
        },
    };

    const minSm = media.minWidthSm;

    const images = [
        <div className={styles.imageCart} key="CEO">
            <img src={ceoImage} alt="CEO portrait"/>
            <p className="legend">CEO</p>
        </div>,
        <div className={styles.imageCart} key="CTO">
            <img src={ctoImage} alt="CTO portrait"/>
            <p className="legend">CTO</p>
        </div>,
        <div className={styles.imageCart} key="CFO">
            <img src={cfoImage} alt="CFO portrait"/>
            <p className="legend">CFO</p>
        </div>,
    ];

    const carousel = <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={3000}
        centerMode={false}
        className={styles.carousel}
        containerClass="container-with-dots"
        dotListClass=""
        itemClass=""
        rtl={false}
        showDots={false}
        slidesToSlide={1}
        responsive={responsive}
    >
        {images}
    </Carousel>;

    const presentation = <div className={styles.presentation}>
        {images}
    </div>;

    return (
        <section id="about-us" className={styles.aboutUs}>
            {minSm
                ? carousel
                : presentation}
        </section>
    );
}

AboutUsSection.propTypes = {};

export default AboutUsSection;