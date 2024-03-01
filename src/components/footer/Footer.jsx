import './footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-title">NLFS</h1>
        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">About</a>
          </li>
          <li>
            <a href="#projects" className="footer-link">Projects</a>
          </li>
          <li>
            <a href="#skills" className="footer-link">Skills</a>
          </li>
        </ul>
        <div className="footer-social">
          <a href="https://www.facebook.com/larsley.salvador" className="footer-social-link" target='_blank'><i className="bx bxl-facebook"></i></a>
          <a href="https://www.linkedin.com/in/nov-larsley-salvador-87b430224/" className="footer-social-link" target='_blank'><i className="bx bxl-linkedin"></i></a>
          <a href="https://www.instagram.com/larsley/?hl=en" className="footer-social-link" target='_blank'><i className="bx bxl-instagram"></i></a>
        </div>
        <span className="footer-copy"> &copy; Nov Larsley F Salvador. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer