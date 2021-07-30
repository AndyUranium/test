import React from 'react';
import './index.scss';

 const SideBar = () =>
<nav className="sidebar">
    <ul className="side-nav">
        <li className="side-nav__item">

            <a href="#" className="side-nav__link">

                <svg className="side-nav__icon">
                    <use xlinkHref="img/sprite.svg#icon-home" />

                </svg>
                <span>Hotel</span>
            </a>
        </li>

        <li className="side-nav__item">

            <a href="#" className="side-nav__link">

                <svg className="side-nav__icon">
                    <use xlinkHref="img/sprite.svg#icon-aircraft-take-off" />

                </svg>
                <span>Flight</span>
            </a>
        </li>

        <li className="side-nav__item">

            <a href="#" className="side-nav__link">

                <svg className="side-nav__icon">
                    <use xlinkHref="img/sprite.svg#icon-key" />

                </svg>
                <span>Car Rental</span>
            </a>
        </li>

        <li className="side-nav__item">

            <a href="#" className="side-nav__link">

                <svg className="side-nav__icon">
                    <use xlinkHref="img/sprite.svg#icon-map" />

                </svg>
                <span>Tours</span>
            </a>
        </li>
    </ul>
    <div className="legal">
        &copy; 2021 by Thrillo
    </div>
</nav>
export default SideBar;