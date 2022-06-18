import React, { useState } from 'react'

function Seachbar({placeholder,searchText,setSearchText}) {
 
 

  return (
    <>
    <div className='searchInputs'>
        <input type="text" placeholder={placeholder} value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
    </div>
    
    </>

  )
}

export default Seachbar