import React from 'react'
import FeaturedNews from './featuredNews/FeaturedNews'
import MainBody from './mainbody/MainBody'
import Sidebar from './sidebar/Sidebar'
import Table from './table/Table'


export default function Body() {
    return (
        <div  style={{display:'flex',flexDirection:'row'}}>
            <div style={{display:'flex',flex:1, border:'1px solid rgb(68, 68, 68)', padding:'20px', borderRadius:'10px', margin:'0px 10px'}} >
                <Sidebar />
            </div>
            <div style={{display:'flex',flex:3, border:'1px solid rgb(68, 68, 68)', padding:'20px', borderRadius:'10px', margin:'0px 10px'}}>
                <MainBody />
            </div>
            <div style={{display:'flex',flex:2, border:'1px solid rgb(68, 68, 68)', padding:'20px', borderRadius:'10px', margin:'0px 10px'}}>
                <div className='lastComponent'style={{width:'100%'}}>
                    <div className='news'>
                       <FeaturedNews /> 
                    </div>
                <div className='table'>
                    <Table />
                </div>
                
                </div>
                
            </div>
        </div>

    )
}

