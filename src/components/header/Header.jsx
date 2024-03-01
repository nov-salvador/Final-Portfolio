import { useState } from 'react';
import './header.css'
function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const [activeTab, setActiveTab] = useState("#home")

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav-logo">NFLS</a>
        <div className={showMenu ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">
            <li className="nav-item">
              <a 
                href="#home" 
                className={activeTab === "#home" ? "nav-link active-link" : "nav-link"}
                onClick={() => setActiveTab("#home")}
              >
                <i className="uil uil-estate nav-icon"/>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#about" 
                className={activeTab === "#about" ? "nav-link active-link" : "nav-link"}
                onClick={() => setActiveTab("#about")}
              >
                <i className="uil uil-user nav-icon"/>
                About me
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#skills" 
                className={activeTab === "#skills" ? "nav-link active-link" : "nav-link"}
                onClick={() => setActiveTab("#skills")}  
              >
                <i className="uil uil-file-alt nav-icon"/>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#projects" 
                className={activeTab === "#projects" ? "nav-link active-link" : "nav-link"}
                onClick={() => setActiveTab("#projects")}
              >
                <i className="uil uil-browser nav-icon"/>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#contact" 
                className={activeTab === "#contact" ? "nav-link active-link" : "nav-link"}
                onClick={() => setActiveTab("#contact")}
              >
                <i className="uil uil-message nav-icon"/>
                Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav-close" onClick={() => setShowMenu(!showMenu)}/>
        </div>
        <div 
          className="nav-toggle" 
          onClick={() => setShowMenu(!showMenu)}
        >
          <i className="uil uil-apps"/>
        </div>
      </nav>
    </header>
  )
}

export default Header;