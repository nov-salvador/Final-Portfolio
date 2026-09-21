import './about.css'
import ProfileImg from '../../../public/assets/pic-me-nobg.png'
import Resume from '../../../public/assets/Resume_Salvador_Nov_Larsley_082026.pdf'
import Info from './Info'

function About() {
  return (
    <section className="about section" id='about'>
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">Introduction</span>
      <div className="about-container container grid">
        <div className="about-data">
          <Info/>
          <p className="about-description">
            As a Civil Engineer and aspiring Data Scientist and Machine Learning Engineer, I combine my engineering background with software development and data-driven problem solving. I have experience building full-stack web applications and developing machine learning projects using Python, data analysis, and modern ML frameworks. My engineering background gives me a strong foundation in analytical thinking, problem solving, and working with real-world systems, which I apply to building practical data and machine learning solutions.
          </p>
          <a href={Resume} download="" className="button button-flex">Download Resume <i className="uil uil-file-info-alt download-file"></i></a>
        </div>
        <img src={ProfileImg} alt="" className="about-img" />
      </div>
    </section>
  )
}

export default About