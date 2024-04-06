import React from 'react'
import { Link } from "react-router-dom";

function Auth({register}) { //property pass cheyanam
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          <img src="https://i.postimg.cc/SxNG36bW/pngtree-young-guy-programmer-freelancer-working-online-working-from-home-office-computer-png-image-2.jpg" alt=""  style={{height:'400px',marginLeft:'100px',marginTop:'60px'}}/>
        </div>
        <div className="col-lg-6">
          <form action="shadow bg-black">
            <h2 className='text-center mt-5'>Project Fair</h2>
            <h4 className='text-center mt-4'>
              {
                register?'Register here....':'Login here....'//register annel Register here kaananam allel login here --->this for heading
              }
              {
                register && //another method of register aanenkil
                <input type="text" placeholder='Username' className='form-control mb-2 mt-4' style={{width:'550px'}} />
              }
             
              <input type="email" placeholder='email' className='form-control mb-2 mt-4' style={{width:'550px'}} />
              <input type="password" placeholder='password' className='form-control mb-2 mt-4' style={{width:'550px'}} />
              
            </h4>
        
        <div>
          {
            register ?
            <div className='text-center m-4 mt-2'>
              <button className='btn btn-light m-4'>Register</button>
              <p>Already registered ?<Link to ={'/login'}>Login Here.....</Link></p>
            </div>
            :
            <div className='text-center m-4'>
                <button className='btn btn-dark m-4'>Login</button>
                <p>New to here? <Link to ={'/register'}>Register Here.....</Link></p>
            </div>
          }
        </div>
        </form>
        </div>
      </div>
     
    </div>
    
  )
}

export default Auth