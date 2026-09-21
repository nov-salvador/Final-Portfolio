import Civil from "./Civil"
import Data_Science from "./Data_Science"
import Fullstack from "./Fullstack"
import Machine_Learning from "./Machine_Learning"
import MLOps from "./MLOps"
import './skills.css'

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">Technical Level</span>
      <div className="skills-container container grid">
        <Fullstack/>
        <Civil/>
        <Data_Science/>
        <Machine_Learning/>
        <MLOps/>
      </div>
    </section>
  )
}

export default Skills