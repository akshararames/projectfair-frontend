import React from 'react'
import { useState } from 'react'; //modal 
import Button from 'react-bootstrap/Button'; //modal 
import Modal from 'react-bootstrap/Modal'; //modal 
function AddProject() {
  const [show, setShow] = useState(false); //modal 

  const handleClose = () => setShow(false); //modal 
  const handleShow = () => setShow(true); //modal 
  return (
    <div className='text-center ms-5'>
      <button className='btn btn-light text-dark m-5 btn-sm' onClick={handleShow}>Add</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col-6">
          <label>
         <input type="file"  style={{display:'none'}}/>
         <img src="https://i.postimg.cc/Qx1J1MLX/3d-programming-developer-working-on-a-project-illustration-png.webp"  style={{height:'300px'}} className='mt-2' alt="" />
        </label>
          </div>
          <div className="col-6">
            <input type="text" placeholder='Project Title' className='form-control mb-3'  />
            <input type="text" placeholder='Languages used' className='form-control mb-3'  />
            <input type="text" placeholder='Git hub link' className='form-control mb-3'  />
            <input type="text" placeholder='Live link' className='form-control mb-3'  />
            <input type="text" placeholder='Overview' className='form-control mb-3'  />
          </div>
         </div>
         
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject