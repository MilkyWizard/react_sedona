import React from "react";

function MediaPage() {
  return (
    <div className="container">
      <section className="intro">
        <img className="intro__banner" src="/img/text-sedona.svg" width="460" height="350" alt="Welcome to Sedona"/>
      </section>
      <section className="content">
        <div className="content__title">
          <h1 className="content__header content__header_bigger">Фото и видео</h1>
          <p className="content__text content__header_smaller">Не можете решиться на путешествие
            из-за курса? Фотографии помогут вам забыть о политике и экономике.</p>
        </div>
        <ul className="photo-list">
          <li className="photo-list__item">
            <figure className="photo-list__content">
              <a className="photo-list__photo" href="https://instagram.com">
                <picture>
                  <source media="(max-width: 767px)"
                          srcSet="img/photo-sunset-mobile@1x.jpg, img/photo-sunset-mobile@2x.jpg"/>
                  <source media="(max-width: 1279px)"
                          srcSet="img/photo-sunset-tablet@1x.jpg, img/photo-sunset-tablet@2x.jpg"/>
                  <source media="(min-width: 1280px)"
                          srcSet="img/photo-sunset-desktop@1x.jpg, img/photo-sunset-desktop@2x.jpg"/>
                  <img src="img/photo-sunset-desktop@1x.jpg" width="1200" height="400" alt="Sunset"/>
                </picture>
              </a>
              <figcaption className="photo-list__text">
                <div className="photo-list__description">
                  <h3 className="photo-list__header">Неродные просторы</h3>
                  <p className="photo-list__author">Автор фото: <span
                    className="photo-list__author-name">Борис</span></p>
                </div>
                <div className="photo-list__likes">
                  <div className="photo-list__likes-icon-wrapper">
                    <img src="/img/icon-like.svg" width="22" height="20" alt="Like"/>
                    <span className="photo-list__likes-count">1350</span>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          <li className="photo-list__item">
            <figure className="photo-list__content">
              <a className="photo-list__photo" href="https://instagram.com">
                <picture>
                  <source media="(max-width: 767px)"
                          srcSet="img/photo-cactus-mobile@1x.jpg, img/photo-cactus-mobile@2x.jpg"/>
                  <source media="(max-width: 1279px)"
                          srcSet="img/photo-cactus-tablet@1x.jpg, img/photo-cactus-tablet@2x.jpg"/>
                  <source media="(min-width: 1280px)"
                          srcSet="img/photo-cactus-desktop@1x.jpg, img/photo-cactus-desktop@2x.jpg"/>
                  <img src="img/photo-cactus-desktop@1x.jpg" width="1200" height="400" alt="Cactus"/>
                </picture>
              </a>
              <figcaption className="photo-list__text">
                <div className="photo-list__description">
                  <h3 className="photo-list__header">Местная растительность</h3>
                  <p className="photo-list__author">Автор фото: <span
                    className="photo-list__author-name">Сергей</span></p>
                </div>
                <div className="photo-list__likes">
                  <div className="photo-list__likes-icon-wrapper">
                    <img src="/img/icon-like.svg" width="22" height="20" alt="Like"/>
                    <span className="photo-list__likes-count">143</span>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          <li className="photo-list__item">
            <figure className="photo-list__content">
              <a className="photo-list__photo" href="https://instagram.com">
                <picture>
                  <source media="(max-width: 767px)"
                          srcSet="img/photo-roads-mobile@1x.jpg, img/photo-roads-mobile@2x.jpg"/>
                  <source media="(max-width: 1279px)"
                          srcSet="img/photo-roads-tablet@1x.jpg, img/photo-roads-tablet@2x.jpg"/>
                  <source media="(min-width: 1280px)"
                          srcSet="img/photo-roads-desktop@1x.jpg, img/photo-roads-desktop@2x.jpg"/>
                  <img src="img/photo-cactus-desktop@1x.jpg" width="1200" height="400" alt="Cactus"/>
                </picture>
              </a>
              <figcaption className="photo-list__text">
                <div className="photo-list__description">
                  <h3 className="photo-list__header">Местная растительность</h3>
                  <p className="photo-list__author">Автор фото: <span
                    className="photo-list__author-name">Петр</span></p>
                </div>
                <div className="photo-list__likes">
                  <div className="photo-list__likes-icon-wrapper">
                    <img src="/img/icon-like.svg" width="22" height="20" alt="Like"/>
                    <span className="photo-list__likes-count">96</span>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          <li className="photo-list__item">
            <figure className="photo-list__content">
              <a className="photo-list__photo" href="https://instagram.com">
                <picture>
                  <source media="(max-width: 767px)"
                          srcSet="img/photo-bridge-mobile@1x.jpg, img/photo-bridge-mobile@2x.jpg"/>
                  <source media="(max-width: 1279px)"
                          srcSet="img/photo-bridge-tablet@1x.jpg, img/photo-bridge-tablet@2x.jpg"/>
                  <source media="(min-width: 1280px)"
                          srcSet="img/photo-bridge-desktop@1x.jpg, img/photo-bridge-desktop@2x.jpg"/>
                  <img src="img/photo-cactus-desktop@1x.jpg" width="1200" height="400" alt="Cactus"/>
                </picture>
              </a>
              <figcaption className="photo-list__text">
                <div className="photo-list__description">
                  <h3 className="photo-list__header">Мост Дьявола</h3>
                  <p className="photo-list__author">Автор фото: <span
                    className="photo-list__author-name">Антон</span></p>
                </div>
                <div className="photo-list__likes">
                  <div className="photo-list__likes-icon-wrapper">
                    <img src="/img/icon-like.svg" width="22" height="20" alt="Like"/>
                    <span className="photo-list__likes-count">254</span>
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
        <section className="presentation">
          <div className="presentation__title">
            <h2 className="presentation__header">Все еще сомневаетесь?</h2>
            <p className="presentation__text">Смотрите видеопрезентацию и скорее за билетами, пока они не
              подорожали в очередной раз!</p>
          </div>
          <div className="video">
            <div className="video__screen">
            </div>
            <div className="video__controls">
              <div className="video__controls-button">
                <img src="/img/icon-video-replay.svg" width="16" height="20" alt="Repeat"/>
              </div>
              <div className="video__controls-length">

              </div>
              <div className="video__controls-button">
                <img src="/img/icon-video-subtitles.svg" width="32" height="20" alt="Subtitles"/>
              </div>
              <div className="video__controls-button">
                <img src="/img/icon-video-fullscreen.svg" width="20" height="20" alt="Fullscreen"/>
              </div>
            </div>
          </div>
        </section>
      </section>
      <footer className="footer">
        <div className="footer__tag">#Visitsedona</div>
        <ul className="social-list">
          <li className="social-list__item">
            <a className="social-list__link social-list__link-twitter" href="https://twitter.com">
              <img src="/img/icon-twitter.svg" alt="Twitter"/>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link social-list__link-facebook" href="https://facebook.com">
              <img src="/img/icon-facebook.svg" alt="Twitter"/>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link social-list__link-youtube" href="https://youtube.com">
              <img src="/img/icon-youtube.svg" alt="Twitter"/>
            </a>
          </li>
        </ul>
        <div className="footer__copyright">
          <span className="footer__copyright-text">Разработано</span>
          <a className="footer__copyright-link" href="https://htmlacademy.ru">
            <img src="/img/logo-htmlacademy.svg" width="26.9" height="34.1" alt="HTML Academy"/>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default MediaPage;