import React, { useState } from 'react'

function Seachbar({placeholder,searchText,setSearchText}) {
 
 

  return (
    <>
    <div className='searchInputs'>
        <input type="text" placeholder={placeholder} value={searchText} onChange={(e)=>setSearchText(e.target.value)} style={{marginBottom: '20px',borderRadius:'5px',border:'none',height:'25px',paddingLeft:'5px',outline:'none',fontSize:'16px'}}/>
    </div>
    
    </>

  )
}

export default Seachbar