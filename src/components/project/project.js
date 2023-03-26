import './project.css';

import portfolioThumbnail from '../images/portfolio-thumbnail.png';
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
                    <h2>Portfolio</h2>
                    <p>In this website you can learn more about me and explore some of the projects I've worked on.<p>This application was built using React.js, which allows for an easier component organization, and while the project is simple it was designed to showcase my skills and experience as a developer.</p></p>
                  </div>
                  <div className="section-project-skills">
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>React.js</p>
                  </div>
                  <div className="section-project-external">
                    <a className="a-section-project-github" href="https://github.com/ivandiaswr/ivan-dias-portfolio" target="_blank" rel="noreferrer">Code<img className="img-section-project-github" src= {github} alt="GitHub" title="GitHub"/></a>
                    <a className="a-section-project-demo" href="https://ivandiaswr.github.io/ivan-dias-portfolio/" target="_blank" rel="noreferrer">Live Demo<img className="img-section-project-demo" src= {demo} alt="Live Demo" title="Live Demo"/></a>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </section>
  );
}

export default Project;


/*  <div className="project">
              <div className="project-items">
                <img className="section-project-image" src= "" alt="Under development"/>
                <div className="section-project-info">
                <div className="section-project-description">
                    <h2>Under development</h2>
                    <p>Under development</p>
                  </div>
                  <div className="section-project-skills">
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>React.js</p>
                  </div>
                  <div className="section-project-external">
                    <a className="a-section-project-github" href="https://github.com/ivandiaswr" target="_blank" rel="noreferrer">Code<img className="img-section-project-github" src= {github} alt="GitHub" title="Github"/></a>
                    <a className="a-section-project-demo" href="https://github.com/ivandiaswr" target="_blank" rel="noreferrer">Live Demo<img className="img-section-project-demo" src= {demo} alt="Live Demo" title="Live Demo"/></a>
                  </div>
                </div>
              </div>
            </div>
            */