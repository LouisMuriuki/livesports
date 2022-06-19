import React,{useEffect, useState} from 'react'
import { axiosInstance } from '../../axios'
import Searchbar from '../Searchbar'
import './sidebar.css'

export default function Sidebar() {
  let count=0
  const [countries, setCountries]  = useState(JSON.parse(localStorage.getItem('countries'))||[])
  const [searchText,setSearchText]=useState('')
//   React.useEffect(() => {  
//     fetch("https://api-football-v1.p.rapidapi.com/v3/countries", {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//         "x-rapidapi-key": "5cd111ac4bmsh54c7b075217b5abp116193jsne0a526846336"
//       }
//     })
//       .then(data => {
//         return data.json()
//       }).then(response => {
        
// setCountries(response.response)
//       })
//   }, [])

  useEffect(()=>{
    localStorage.setItem('countries',JSON.stringify(countries))
   },[countries])

  return (
      <div className='leagueContainer'>
        <div>
          <Searchbar
            placeholder="Search..."
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </div>
        {countries && countries.filter(country=>country.name.toLowerCase().includes(searchText)).map((country,i)=>(
          <div className='dataItem' key={i}>
            <img src={country.flag } alt={country.name }/> 
          <p>{country.name }</p>
        </div>
        ))}
      </div>
   )
}

