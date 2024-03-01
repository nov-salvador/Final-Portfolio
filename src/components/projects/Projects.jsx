import ProjectData from './ProjectData'
import './projects.css'

function Projects() {
  return (
    <section id="projects" className="projects section">
      <h2 className="section-title">Projects</h2>
      <span className="section-subtitle">Recent Works</span>
      <ProjectData/>
    </section>
  )
}

export default Projects