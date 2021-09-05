import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function Top () {
    return (
      <Router>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Главная</Link>
                </li>
                <li>
                  <Link to="/media">Фото и видео</Link>
                </li>
                <li>
                  <Link to="/">Лого</Link>
                </li>
                <li>
                  <Link to="/form">Форма отзыва</Link>
                </li>
                <li>
                  <Link to="/academy">HTML Academy</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main>
            <Switch>
              <Route path="/media">
                <Media />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </Router>
      );
}

const Home = () => <h2>Главная</h2>;

const Media = () => <h2>Фото и видео</h2>;

const Form = () => <h2>Форма отзыва</h2>;

export default Top;
