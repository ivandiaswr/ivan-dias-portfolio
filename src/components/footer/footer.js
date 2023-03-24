import './footer.css';

import linkedin from '../images/linkedin-black-logo.png';
import github from '../images/github-black-logo.png';
import resume from '../images/resume-logo.png';
import resumeFile from '../resume/resume.pdf';

function Footer() {
  return (
        <footer>
          <div className="footer-copyright">
            <p>Copyright &copy; 2023. All rights reserved.</p>
          </div>
          <div className="footer-images">
            <a href="https://www.linkedin.com/in/ivandiaswr/" target="_blank" rel="noreferrer"><img className="footer-img-linkedin" src={linkedin} alt="LinkedIn" title="LinkedIn"/></a>
            <a href="https://github.com/ivandiaswr" target="_blank" rel="noreferrer"><img className="footer-img-github" src={github} alt="GitHub" title="Github"/></a>
            <a href={resumeFile} target="_blank" rel="noreferrer"><img className="footer-img-resume" src={resume} alt="Resume" title="Resume"/></a>
          </div>
        </footer>
  );
}

export default Footer;
