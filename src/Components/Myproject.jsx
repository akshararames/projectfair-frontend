import React from 'react'
import AddProject from './AddProject'
import { FaGithub } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
function Myproject() {
  return (
    <div>
        <div className='d-flex justify-content-between'>
        <h3 className='ms-5'>My Projects</h3>
        <AddProject/>
    </div>
    <div className='row shadow m-4 p-5 '>
        <div className="col-6">
        <h4 className='mt-4'>Project Title</h4>
    </div>
    <div className='col-6 d-flex  justify-content-evently'>
        <button className='btn m-2'><FaGithub /></button>
        <button className='btn m-2'><FaEdit /></button>
        <button className='btn m-2'><MdDeleteOutline /></button>
    </div>
    </div>
    </div>
  )
}

export default Myproject