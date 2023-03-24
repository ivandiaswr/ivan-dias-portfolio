import './header.css';

function Header() {
  return (
    <div>
      <header>
        <nav className="header-nav">
          <div className="header-name">Ivan.dev</div>
          <ul className="header-list">
            <li className="header-list-home"><a href="#section-home" >Home</a></li>
            <li className="header-list-projects"><a href="#section-project">Projects</a></li>
            <li className="header-list-contact"><a href="#section-contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
