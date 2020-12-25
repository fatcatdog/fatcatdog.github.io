import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './components/Projects';
import About from './components/About';
import Blogs from './components/Blogs';
import Blog from './components/Blog';
import * as serviceWorker from './serviceWorker';
import { Route, HashRouter, Switch } from 'react-router-dom';
import './styles/NoMatchPage.css';
// import {Helmet} from "react-helmet";

const routing = (
  <HashRouter>
    <div>
      <Switch>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={About} />
      <Route path={process.env.PUBLIC_URL + "/projects"} component={Projects} />
      <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
      <Route path={process.env.PUBLIC_URL + "/blogs"} component={Blogs} />
      <Route path={process.env.PUBLIC_URL + "/blog/:tag"} component={Blog} />
      </Switch>
    </div>
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
