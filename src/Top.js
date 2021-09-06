import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Container from "./Container";

function Top() {
    return (
        <Router>
            <header className="header">
                <nav className="nav">
                    <button className="close-button"> </button>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link className="nav__link" to="/">Главная</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__link" to="/media">Фото и видео</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__link" to="/form">Форма отзыва</Link>
                        </li>
                        <li className="nav__item">
                            <Link className="nav__link" to="/academy">HTML Academy</Link>
                        </li>
                        <li className="nav__item nav__item_logo">
                            <Link className="nav__link nav__link_logo" to="/">
                                <picture>
                                    <source media="(max-width: 767px)" srcSet="/img/logo-sedona-mobile.svg"/>
                                    <source media="(max-width: 1279px)" srcSet="/img/logo-sedona-tablet.svg"/>
                                    <source media="(min-width: 1280px)" srcSet="/img/logo-sedona-desktop.svg"/>
                                    <img className="nav__logo" src="/img/logo-sedona-desktop.svg" alt="Sedona" width="188" height="98"/>
                                </picture>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <Switch>
                    <Route path="/media">
                        <Media/>
                    </Route>
                    <Route path="/form">
                        <Form/>
                    </Route>
                    <Route path="/">
                        <Container/>
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

const Media = () => <h2>Фото и видео</h2>;

const Form = () => <h2>Форма отзыва</h2>;

export default Top;
