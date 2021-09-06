import React from "react";


function Container() {
    return (
        <div className="container">
            <section className="intro intro_first-page">
                <img className="intro__banner" src="/img/text-sedona-index.svg" width="460" height="350" alt="Welcome to Sedona"/>
            </section>
            <section className="content">
                <div className="content__greeting">
                    <h1 className="content__header">Седона - небольшой городок в Аризоне, заслуживающий большего!</h1>
                    <p className="content__text">Рассмотрим 5 причин, по которым седона круче, чем Гранд Каньон!</p>
                </div>
            </section>
            <section className="advantages">
                <div className="advantage">
                    <div className="advantage__inner">
                        <div className="advantage__text">
                            <h2 className="advantage__header">Настоящий городок</h2>
                            <p className="advantage__number">— №1 —</p>
                            <p className="advantage__paragraph">Седона не аттракцион для туристов, там течёт своя жизнь</p>
                        </div>
                        <div className="advantage__photo">
                            <picture>
                                <source media="(max-width: 767px)" srcSet="/img/main-city-mobile@1x.jpg, /img/main-city-mobile@2x.jpg"/>
                                <source media="(max-width: 1279px)" srcSet="/img/main-city-tablet@1x.jpg, /img/main-city-tablet@2x.jpg"/>
                                <source media="(min-width: 1280px)" srcSet="/img/main-city-desktop@1x.jpg, /img/main-city-desktop@2x.jpg"/>
                                <img src="/img/main-city-desktop@1x.jpg" alt="Город" width="800" height="400"/>
                            </picture>
                        </div>
                        <ul className="features">
                            <li className="features__item">
                                <div className="features__icon">
                                    <img src="/img/icon-house.svg" alt="Жилье"/>
                                </div>
                                <div className="features__text">
                                    <h3 className="features__heading">Жилье</h3>
                                    <p className="features__paragraph">Рекомендуем пожить в настоящем мотеле, все как в кино!</p>
                                </div>
                            </li>
                            <li className="features__item">
                                <div className="features__icon-wrapper">
                                    <img src="/img/icon-gift.svg" alt="Сувениры"/>
                                </div>
                                <div className="features__text">
                                    <h3 className="features__heading">Сувениры</h3>
                                    <p className="features__paragraph">Не только китайского, но и местного производства!</p>
                                </div>
                            </li>
                            <li className="features__item">
                                <div className="features__icon-wrapper">
                                    <img src="/img/icon-burger.svg" width="76" height="69" alt="Еда"/>
                                </div>
                                <div className="features__text">
                                    <h3 className="features__heading">Еда</h3>
                                    <p className="features__paragraph">Всегда заказывайте фирменный бургер, вы не разочаруетесь!</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="advantage">
                    <div className="advantage__inner">
                        <div className="advantage__text">
                            <h2 className="advantage__heading">Там есть мост дьявола</h2>
                            <p className="advantage__number">— №2 —</p>
                            <p className="advantage__paragraph">Да, по нему можно пройти! Если вы осмелитесь,
                                конечно</p>
                        </div>
                        <div className="advantage__photo">
                            <picture>
                                <source media="(max-width: 767px)" srcSet="/img/main-bridge-mobile@1x.jpg, /img/main-bridge-mobile@2x.jpg"/>
                                <source media="(max-width: 1279px)" srcSet="/img/main-bridge-tablet@1x.jpg, /img/main-bridge-tablet@2x.jpg"/>
                                <source media="(min-width: 1280px)" srcSet="/img/main-bridge-desktop@1x.jpg, /img/main-bridge-desktop@2x.jpg"/>
                                <img src="/img/main-bridge-desktop@1x.jpg" alt="Мост Дьявола" width="800" height="400"/>
                            </picture>
                        </div>
                    </div>
                </div>
                <div className="advantages__card advantages__card_short">
                    <div className="advantage__inner">
                        <div className="advantage__text">
                            <h3 className="advantage__heading">Небольшая площадь</h3>
                            <p className="advantage__number">— №3 —</p>
                            <p className="advantage__paragraph">Все интересные места находятся очень близко</p>
                        </div>
                    </div>
                </div>
                <div className="advantages__card advantages__card_short">
                    <div className="advantage__inner">
                        <div className="advantage__text">
                            <h3 className="advantage__heading">Красивая дорога</h3>
                            <p className="advantage__number">— №4 —</p>
                            <p className="advantage__paragraph">Ехать в Седону из Лас-Вегаса совсем не скучно!</p>
                        </div>
                    </div>
                </div>
                <div className="advantages__card advantages__card_short">
                    <div className="advantage__inner">
                        <div className="advantage__text">
                            <h3 className="advantage__heading">Мало туристов</h3>
                            <p className="advantage__number">— №5 —</p>
                            <p className="advantage__paragraph">Большинство едет в Гранд-Каньон и толпится там</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="location">
                <div className="location__find">
                    <h2 className="location__heading">Заинтересовались?</h2>
                    <p className="location__text">Укажите предполагаемые даты поездки, и мы покажем вам лучшие
                        предложения гостиниц в Седоне</p>
                    <a className="location__link button" href="https://youtube.com">Найти гостиницу</a>
                </div>
                <div className="map">
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe className="map__source"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52383.38657020669!2d-111.81591007638494!3d34.85719066415967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2z0KHQtdC00L7QvdCwLCDQkNGA0LjQt9C-0L3QsCA4NjMzNiwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1599767723627!5m2!1sru!2sru"
                            width="320" height="350" frameBorder="0" allowFullScreen=""
                            aria-hidden="false" tabIndex="0">
                    </iframe>
                </div>
            </section>
            <footer className="footer">
                <div className="footer__tag">#Visitsedona</div>
                <ul className="social-list">
                    <li className="social-list__item">
                        <a className="social-list__link social-list__link-twitter" href="https://twitter.com">
                            <img src="/img/icon-twitter.svg"/>
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a className="social-list__link social-list__link-facebook" href="https://facebook.com">
                            <img src="/img/icon-facebook.svg"/>
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a className="social-list__link social-list__link-youtube" href="https://youtube.com">
                            <img src="/img/icon-youtube.svg"/>
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

export default Container;