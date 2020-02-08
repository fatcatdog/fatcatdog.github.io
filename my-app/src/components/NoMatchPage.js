import React from 'react';
import Header from './Header';
import '../styles/NoMatchPage.css';

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

export default NoMatchPage;
