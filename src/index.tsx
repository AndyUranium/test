import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      < Header />
      <div className="content">
asdf asdf
        <SideBar />
        <main className="hotel-view">
          <div className="gallery">
            <figure className="gallery__item">
              <img className="gallery__photo" src="img/hotel1.webp" alt="hotel1" />
            </figure>
            <figure className="gallery__item">
              <img className="gallery__photo" src="img/hotel2.webp" alt="hotel2" />
            </figure>
            <figure className="gallery__item">
              <img className="gallery__photo" src="img/hotel3.webp" alt="hotel3" />
            </figure>
          </div>

          <div className="overview">
            <h1 className="overview__heading">
              Hotel Las Palmas
            </h1>

            <div className="overview-stars">
              <svg className="overview__icon-star">
                <use
                  xlinkHref="img/sprite.svg#icon-star-outlined">
                </use>
              </svg>
              <svg className="overview__icon-star">
                <use
                  xlinkHref="img/sprite.svg#icon-star-outlined">
                </use>
              </svg>
              <svg className="overview__icon-star">
                <use
                  xlinkHref="img/sprite.svg#icon-star-outlined">
                </use>
              </svg>
              <svg className="overview__icon-star">
                <use
                  xlinkHref="img/sprite.svg#icon-star-outlined">
                </use>
              </svg>
              <svg className="overview__icon-star">
                <use
                  xlinkHref="img/sprite.svg#icon-star-outlined">
                </use>
              </svg>
            </div>
            <div className="overview__location">
              <svg className="overview__icon-location">
                <use
                  xlinkHref="img/sprite.svg#icon-location-pin">
                </use>
              </svg>
              <button className="btn-inline">
                Albufeira, Portugal Lorem, ipsum dolor .
              </button>


            </div>
            <div className="overview__rating">

              <div className="overview__rating-average">8.6</div>
              <div className="overview__rating-count">429 votes</div>
            </div>

          </div>

        </main>
      </div>
    </div>

  </React.StrictMode >,
  document.getElementById('root')
);
