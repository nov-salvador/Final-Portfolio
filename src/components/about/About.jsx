import './about.css'
import ProfileImg from '../../../public/assets/pic-me-nobg.png'
import Resume from '../../../public/assets/Resume-Salvador-Nov-Larsley-F..pdf'
import Info from './Info'

function About() {
  return (
    <section className="about section" id='about'>
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">Introduction</span>
      <div className="about-container container grid">
        <div className="about-data">
          <Info/>
          <p className="about-description">As a civil engineer and full-stack web developer, I specialize in designing and constructing physical infrastructure while also creating user-friendly web applications. My expertise in structural principles and web technologies allows me to bring innovative solutions to both real-world projects and digital platforms, seamlessly merging engineering and technology to meet diverse needs.</p>
          <a href={Resume} download="" className="button button-flex">Download Resume <i className="uil uil-file-info-alt download-file"></i></a>
        </div>
        <img src={ProfileImg} alt="" className="about-img" />
      </div>
    </section>
  )
}

export default About