import './home.css';
import me from '../images/ivan-logo.jpg';
import linkedin from '../images/linkedin-black-logo.png';
import github from '../images/github-black-logo.png';
import resume from '../images/resume-logo.png';
import resumeFile from '../resume/resume.pdf';

import csharp from '../images/csharp-logo.png';
import html5 from '../images/html5-logo.png';
import css3 from '../images/css3-logo.png';
import javascript from '../images/javascript-logo.png';
import react from '../images/react-logo.png';
import aspnet from '../images/asp.net-logo.png';



function Home() {
  return (
    <section id="section-home" className="section-home">
          <div className="home">
              <div className="home-info">
                <div className="home-titles">
                  <h1 className="home-title-primary">Full-Stack Developer</h1>
                  <h2 className="home-title-secondary">with <span>.NET</span> and <span>React.js</span></h2>
                  <p>I'm Ivan. I'm passionate about building software that not only meets client requirements but also exceeds their expectations. I always strive to create clean, maintainable code that follows best practices. If you're looking for a driven developer for your next project, feel free to contact me through the website.</p><p>Based in <strong>Lisbon, Portugal</strong>.</p>

                  <div className="images">
                    <a className="a-linkedin" href="https://www.linkedin.com/in/ivandiaswr/" target="_blank" rel="noreferrer"><img className="img-linkedin" src={linkedin} alt="LinkedIn" title="LinkedIn"/></a>
                    <a className="a-github" href="https://github.com/ivandiaswr" target="_blank" rel="noreferrer"><img className="img-github" src={github} alt="GitHub" title="Github"/></a>
                    <a className="a-resume" href={resumeFile} target="_blank" rel="noreferrer"><img className="img-resume" src={resume} alt="Resume" title="Resume" /></a>
                  </div>
                </div>
                <div>
                  <img className="img-portofolio" src={me} alt="Ivan" title="Ivan"/>
                </div>
                  
              </div> 
              <div className="home-skills">
                  <p>Tech: </p>
                  <div className="home-skills-images">
                    <img class="box" src={csharp} alt="C Sharp" title="C#"/>
                    <img src={aspnet} alt="aspnet" title="ASP.NET"/>
                    <img src={html5} alt="HTML5" title="HTML5"/>
                    <img src={css3} alt="CSS3" title="CSS3"/>
                    <img src={javascript} alt="JavaScript" title="JavaScript"/>
                    <img src={react} alt="React.js" title="React.js"/>
                  </div>
              </div>
            </div>      
        </section>
  );
}

export default Home;
