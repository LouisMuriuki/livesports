import React from 'react'
import MainBody from './mainbody/MainBody'
import Sidebar from './sidebar/Sidebar'


export default function Body() {
    return (
        <div  style={{display:'flex',flexDirection:'row'}}>
            <div style={{display:'flex',flex:1}} >
                <Sidebar />
            </div>
            <div style={{display:'flex',flex:1}}>
                <MainBody />
            </div>
        </div>

    )
}

