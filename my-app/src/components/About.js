import React from 'react';
import Header from './Header';
import '../styles/About.css';

function About() {
  return(
    <div>
      <Header />
        <div className="aboutHeader">
          <h2>About</h2>
        </div>

      <div className="aboutContainer">
        <div className="aboutMeParagraph">
          <p>After working in software sales for a few years, I realized I wanted to learn how to build digital products not just sell them. I currently work as a software engineer in the New York area.</p>

         <p>In my free time I likely can be found playing pickup basketball or staring at a computer screen. I can be reached at <a href="https://twitter.com/fatcatdog2">@fatcatdog2</a></p>
      </div>
    </div>
    </div>
  )
}

export default About;
