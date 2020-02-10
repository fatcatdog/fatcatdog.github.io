import React from 'react';
import Header from './Header';
import '../styles/Projects.css';
import { projects } from '../utils/stuff';

let data = projects;

const Projects = () => {
  return(
    <div>
      <Header />
      <div className="projectsHeader">
        <h2>Personal Projects</h2>
          <p>Below are web apps I've built over the last few years:</p>
      </div>
      <div className="projectsContainer">
      <div className="listOfProjects">
        <ul className="ourListStyles">
           {data.map(project => (
             <li key={project.name}>
                <div className="projectTitle">
                  {project.name}
                </div>
                 <br />
                 <div className="projectDescription">
                   {project.description}{" - "}<a className="project_link" href={project.url} rel="noreferrer noopener" target="_blank">Repo</a>
                 </div>
            <br />
           </li>
           ))}
           <br />
         </ul>
      </div>
      </div>
    </div>
  )
}

export default Projects;
