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
          <p>After working in software sales for a few years, I realized I wanted to learn how to build digital products. I currently work as a software engineer in the New York area.</p>

         <p>In my free time I likely can be found playing pickup basketball, jogging really slowly, or staring at a computer screen. I can be reached on <a href="https://twitter.com/jacobDevDev">Twitter</a> and <a href="https://www.linkedin.com/in/randomstringhere/">LinkedIn</a></p>
      </div>
    </div>
    </div>
  )
}

export default About;
