import React from 'react'
import { Link } from 'react-router-dom'
import SeferCard from './SeferCard'

function Seyahatlarim() {
  return (
    <div>

<div className='mb-3'>
<h2>Seyahatlarim</h2>
</div>

<div>
      <div className="mb-3 p-0">
        <Link to={'../'} style={{ width: "161px" }} className="btn btn-danger">
          geri gel
        </Link>
      </div>
   
        {
            [1,2,3,4,5,6,7].map(e=> <div className="container mt-3"><SeferCard/></div>)
        }
     
    
    </div>
    </div>
  )
}

export default Seyahatlarim