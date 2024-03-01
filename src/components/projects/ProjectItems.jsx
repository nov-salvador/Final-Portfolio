
function ProjectItems({item}) {
  return (
    <div className="project-card">
      <img src={item.picture} alt="" className="project-img" />
      <h3 className="project-title">{item.title}</h3>
      <span className="project-description">{item.description}</span>
      <div className="button-container">
        <a href={item.demo} target="_blank"className="project-button">
          Demo 
          <i className="bx bx-right-arrow-alt project-button-icon"></i>
        </a>
        <a href={item.demo} target="_blank"className="project-button-github">
          <i className="uil uil-github-alt project-button-github-icon"></i>
        </a>
      </div>
    </div>
  )
}

export default ProjectItems