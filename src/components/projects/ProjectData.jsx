import React, { useEffect, useState } from 'react'
import {projectsData, categories} from './Data'
import ProjectItems from './ProjectItems'

function ProjectData() {
  const [item, setItem] = useState("All");
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  function handleClick(e, index){
    setItem(`${e.target.textContent}`)
    setActive(index)
  }

  useEffect(() => {
    if(item === 'All'){
      setProjects(projectsData);
    }else{
      const newProject = projectsData.filter((proj) =>{
        return proj.category === item;
      })
      setProjects(newProject);
    }
  },[item])
  
  return (<>
    <div className="project-filters">
      {categories.map((item, index) => {
        return (
          <span 
            onClick={(e) => handleClick(e, index) }
            key={index}
            className={`${active === index ? 'active-project' : ''} project-item`}
          >
            {item}
          </span>
        )
      })}
    </div>
    <div className="project-container container grid">
      {projects.map((item)=> {
        return <ProjectItems item ={item} key={item.id}/>
      })}
    </div>
  </>)
}

export default ProjectData