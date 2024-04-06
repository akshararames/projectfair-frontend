import React from 'react'
import Myproject from '../Components/Myproject'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <div>
      <div className="row">
        <h2 className='text-center mt-3'>Welcome <span className='text-light'>User</span></h2>
        <div className="col-lg-6">
         <Myproject/>
        </div>
        <div className="col-lg-6">
          <Profile/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard