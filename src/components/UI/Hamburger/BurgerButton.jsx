/**
 * Created by antares on 21.02.2023
 */

import './Hamburger.css';
import './Hamburger.custom.css';

import React, {useState} from 'react';

function BurgerButton(props) {
    const buttonClasses = `hamburger ${props.buttonType} ${props.active ? 'is-active' : ''}`;

    const clickHandler = () => {
        props.onClick();
    };

    return (
        <button className={buttonClasses} type="button" onClick={clickHandler}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    );
}

BurgerButton.propTypes = {};

export default BurgerButton;