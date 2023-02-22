/**
 * Created by antares on 22.02.2023
 */

import HeaderSection from '../HeaderSection.jsx';
import Container from '../UI/Container.jsx';
import styles from './ContactSection.module.scss';

import React from 'react';

function ContactSection() {
    return (
        <section id="contact" className={styles.contact}>
            <HeaderSection>Contact us</HeaderSection>
            <form>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" placeholder="Your name"/>

                <label htmlFor="email">Email:</label>
                <input id="email" type="text" placeholder="Your email"/>

                <label htmlFor="message">Message:</label>
                <textarea id="message"></textarea>

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

ContactSection.propTypes = {};

export default ContactSection;