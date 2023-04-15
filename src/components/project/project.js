import './project.css';

import portfolioThumbnail from '../images/holidayplanner-thumbnail.png';
import github from '../images/github-black-logo.png';
import demo from '../images/website.png';

function Project() {
  return (
        <section id="section-project" className="section-project">
          <div className="section-project-grid">
            <div className="project"><h1>Projects</h1></div>
            <div className="project">
              <div className="project-items">
                <img className="section-project-image" src= {portfolioThumbnail} alt="Portfolio"/>
                <div className="section-project-info">
                  <div className="section-project-description">
                    <h2>Holiday Planner</h2>
                    <p>Our platform offers a range of functionalities to help you plan, update, and delete your vacations with ease. You can effortlessly create plans by providing plan details, whether it's a personal goal or a team vacation. We have exciting features in our roadmap to enhance your experience further. </p>
                  </div>
                  <div className="section-project-skills">
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>JS6</p>
                    <p>React.js</p>
                  </div>
                  <div className="section-project-external">
                    <a className="a-section-project-github" href="https://github.com/ivandiaswr/holiday-planner" target="_blank" rel="noreferrer">
                      Code
                      <img className="img-section-project-github" src= {github} alt="GitHub" title="GitHub"/>
                    </a>
                    <a className="a-section-project-demo" href="https://victorious-plant-0f4deba03.3.azurestaticapps.net" target="_blank" rel="noreferrer">
                      Live Demo
                      <img className="img-section-project-demo" src= {demo} alt="Live Demo" title="Live Demo"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}

export default Project;
