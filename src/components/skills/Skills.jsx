import Civil from "./Civil"
import Fullstack from "./Fullstack"
import './skills.css'

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">Technical Level</span>
      <div className="skills-container container grid">
        <Fullstack/>
        <Civil/>
      </div>
    </section>
  )
}

export default Skills