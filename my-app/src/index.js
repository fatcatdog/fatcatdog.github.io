import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Blog from './components/Blog';
// import NoMatchPage from './components/NoMatchPage';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './styles/NoMatchPage.css';

function NoMatchPage() {
  return(
    <div>
      <div className="everything">
        <Header />
          <h2>404</h2>
        <p>Something went very wrong :(</p>
      </div>
    </div>
  )
}

const routing = (
  <Router>
    <div>
      <Switch>
      <Route exact path="/" component={Blogs} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/blogs" component={Blogs} />
      <Route path="/blog/:tag" component={Blog} />
      <Route component={NoMatchPage} />
      </Switch>

    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
