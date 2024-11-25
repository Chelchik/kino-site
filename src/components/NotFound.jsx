import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notFound'>
        <h3>there is no such page or it is under development go <Link to="/" style={{color: "rgba(229, 255, 0, 0.918)"}} >Home</Link></h3>
    </div>
  )
}

export default NotFound