import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { FaLaptopCode } from "react-icons/fa";
function Header() {
  return (
    <div>
         <MDBNavbar light bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-light fs-2'>
          <FaLaptopCode className='m-3' />
            Project Fair
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header