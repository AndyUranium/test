import React from 'react';
import './index.scss';

const Header = () =>
    <header className="header">

        <img src="" alt="logo" className="logo" />

        <form action="#" className="search">

            <input type="text" className="search__input" />
            <button className="search__button">
                <svg className="search__icon">
                    <use
                        xlinkHref="img/sprite.svg#icon-magnifying-glass">
                    </use>
                </svg>
            </button>
        </form>
        <nav className="user-nav">
            <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                    <use
                        xlinkHref="img/sprite.svg#icon-chat">
                    </use>
                </svg>
                <span className="user-nav__notification"> 7</span>
            </div>

            <div className="user-nav__icon-box">
                <svg className="user-nav__icon">
                    <use
                        xlinkHref="img/sprite.svg#icon-bookmark">
                    </use>
                </svg>
                <span className="user-nav__notification"> 13</span>

            </div>

            <div className="user-nav__user">
                <img src="img/profile.jpg" alt="profile image" className="user-nav__user-photo" />
                <span className="user-nav__user-name"> Andrey Tsytsarkin</span>

            </div>
        </nav>
    </header>

export default Header;