import React from 'react'
import { useState } from 'react';//modal
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';//modal
import Card from 'react-bootstrap/Card';//card
import { FaGithub } from "react-icons/fa";//react icon
import { FaLink } from "react-icons/fa6";//react icon
function ProjectCard() {
  const [show, setShow] = useState(false); //modal
  const handleClose = () => setShow(false);//modal
  const handleShow = () => setShow(true);//modal
  return (
    <div>
      <Card style={{ width: '18rem'}} onClick={handleShow}>
      <Card.Img variant="top" src="https://i.postimg.cc/VkdMP1DN/istockphoto-1413922045-612x612.jpg"  />
      <Card.Body>
        <Card.Title className='text-center'>Project Title</Card.Title>
       
        </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col-6">
              <img src="https://i.postimg.cc/SsHG2RRj/6109653.webp" alt="" style={{height:'300px',width:'230px'}} />
          </div>
          <div className="col-6">
             <h2>Project Title</h2>
             <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio animi libero dolorem molestiae. Consectetur, perferendis dignissimos possimus.</p>
          <p>Technology Used : <b>React , Node</b></p>
          
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
        <div>
          <button  className='btn btn-dark m-3'> <a href=""><FaGithub /></a></button>
          <button className='btn btn-dark m-3'><a href=""><FaLink /></a></button>
           
          </div>
          <Button variant="secondary" >
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard