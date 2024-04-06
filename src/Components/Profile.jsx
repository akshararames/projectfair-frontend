import React from 'react'
import Swal from 'sweetalert2'
function Profile() {
  const  updateProfile=()=>{
    Swal.fire({
      title: 'Success',
      text: 'User details Updated',
      icon: 'Success',
      confirmButtonText: 'Back'
    })
  }
  return (
    <div>
      <div className='text-center'>
        <h2 className='mt-2'>My Profile</h2>
        <label>
         <input type="file"  style={{display:'none'}}/>
         <img src="https://i.postimg.cc/rFgvndV7/images.png" className='mt-2' alt="" />
        </label>
        <input type="text"  placeholder='Name' className='form-control mt-4' style={{width:'550px',height:'35px'}} />
        <input type="text"  placeholder='Git hub' className='form-control mt-4'style={{width:'550px',height:'35px'}} />
        <input type="text"  placeholder='Live link' className='form-control mt-4'style={{width:'550px',height:'35px'}} />
        <button className='btn btn-dark mt-3 btn-sm' onClick={updateProfile}>Update</button>
      </div>
    </div>
  )
}


export default Profile
//vere image add on cheyan <label> <input type="file"/>.......(venda image)</label>