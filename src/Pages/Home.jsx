import React from 'react'

import ProjectCard from '../Components/ProjectCard'

function Home() {
  return (
    <div>
        <div className="row">
            <div className="col-md-6">
                <h1 className='text-center mt-4'>Project Fair</h1>
                <p style={{textAlign:'justify'}} className='ms-5 mt-4'>Project Fair is part of the University of Edinburgh Business School. It is built upon a strong body of our research and practice over more than a decade into the psychological impact of dual salaries in the INGO sector impacting employee motivation, performance, retention, learning and teamwork. Underpinning our work is in-depth expertise in social justice and fairness, and the role organisational policies and practices play to address the challenges related to poverty and inequality.</p>
                <div className='text-center'>
                   <a href="/login" className='btn btn-dark mt-4'>Get Started</a>
                </div>
            </div>
            <div className="col-md-6">
                 <img src="https://i.postimg.cc/gkMdmGJK/3d-web-developer-working-on-project-illustration-png-1.webp" alt="" style={{height:'400px'}} className='mt-5 ms-5 ps-5' />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <h1 className='text-center fs-2 text-light mt-5'>Explore projects</h1>
                <marquee width="100%" direction="left" height="260px">
               <div>
                <ProjectCard/>
               </div>
                 </marquee>
            </div>
            <div className="row">
            <h1 className='text-center text-light mt-4'>Our Services</h1>
                <div className="col-md-4 mt-5">
                    <div className="card p-4 ms-2">
                     <h3 className='text-center text-light'>Web Designing</h3>
                     <p style={{textAlign:'justify'}} className='mt-4'>Web design involves creating the visual elements and layout of a website, while coding involves translating these designs into a functional website using programming languages like HTML, CSS, and JavaScript. Typically, dedicated web developers translate the designs to code.</p>
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                <div className="card  p-4 ms-2">
                     <h3 className='text-center text-light'>Single page application</h3>
                     <p style={{textAlign:'justify'}} className='mt-4'>A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.Eg:Facebook, Google Maps.</p>
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                <div className="card  p-4 ms-2">
                     <h3 className='text-center text-light'>Backend Services</h3>
                     <p style={{textAlign:'justify'}} className='mt-4'>A backend service defines how Cloud Load Balancing distributes traffic. The backend service configuration contains a set of values, such as the protocol used to connect to backends, various distribution and session settings, health checks, and timeouts.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home