import { useState } from 'react'
import './qualification.css'

function Qualification() {
  const [toggle, setToggle] = useState(1)
  function toggleTab(index){
    setToggle(index)
  } 
  return (
    <section className="qualification section">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">Self-discovery</span>
      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div 
            className={toggle === 1 ? "qualification-button button-flex qualification-active" : "qualification-button button-flex"}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification-icon"></i>
            Education
          </div>
          <div 
            className={toggle === 2 ? "qualification-button button-flex qualification-active" : "qualification-button button-flex"}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-suitcase qualification-icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification-sections">
          <div className={toggle === 1 ? "qualification-content qualification-content-active" : "qualification-content"}>
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Fullstack Web Developer</h3>
                <span className="qualification-subtitle">Uplift Code Camp</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calender calendar-icon"></i>
                  September 2023 - March 2024
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">Registered Civil Engineer</h3>
                <span className="qualification-subtitle">Civil Engineering Board Exam</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calender calendar-icon"></i>
                  November 2022
                </div>
              </div>
            </div>
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">BS Civil Engineering</h3>
                <span className="qualification-subtitle">University of Saint Louis Tuguegarao</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calender calendar-icon"></i>
                  2018 - 2022
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">Regional Science High School</h3>
                <span className="qualification-subtitle">With Honors</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calender calendar-icon"></i>
                  2012 - 2018
                </div>
              </div>
            </div>
          </div>

          <div className={toggle === 2 ? "qualification-content qualification-content-active" : "qualification-content"}>
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Civil Engineer</h3>
                <span className="qualification-subtitle">JFE Techno Manila, Inc.</span>
                <div className="qualification-calendar">
                  <i className="uil uil-calender calendar-icon"></i>
                  June 2023 - September 2024
                </div>
              </div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification