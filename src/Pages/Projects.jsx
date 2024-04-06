import React from 'react'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <div>
      <h2 className='text-center mt-4'>All Projects</h2>
      <input type="text" placeholder='Search by Technology' className='form-control mt-4 mx-auto'  style={{width:'600px'}}/>
      <div className="row">
        <div className="col">
          <ProjectCard/>
        </div>
      </div>
    </div>
  )
}

export default Projects
//mx-auto input centeril varum 