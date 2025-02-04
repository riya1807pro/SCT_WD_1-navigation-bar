import React from 'react'
import { useNavigate} from "react-router-dom"

function Naviagtion() {
    const navigate = useNavigate();
  return (
    <div className='naviagtion'>
    <span className="logo">
        <img src="" alt="logo" />
    </span>
    <div className='pages' >
    <span onClick={()=>{
        navigate("/Home")
      }}>Home</span>
      <span onClick={()=>{
        navigate("/About")
      }}>About</span>
      <span onClick={()=>{
        navigate("/Service")
      }}>Service</span>
    </div>
    </div>
  )
}

export default Naviagtion
