import React from 'react'
import Spinner from '../../img/spinner.gif' 

function spiner() {
    return (
       <img 
       src={Spinner}
       style={{ width: '200px', margin: 'auto', display: 'block' }}
       alt="Loading"
       />
    )
}

export default spiner
