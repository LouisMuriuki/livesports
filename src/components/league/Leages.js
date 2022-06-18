import React,{useState} from 'react'
import Searchbar from '../Searchbar'
import './Leages.css'

export default function Leages() {
  let count=0
  const [league, setLeague]  = useState()
  React.useEffect(() => {
    fetch("https://api-football-v1.p.rapidapi.com/v3/leagues", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "5cd111ac4bmsh54c7b075217b5abp116193jsne0a526846336"
      }
    })
      .then(data => {
        return data.json()
      }).then(response => {
        console.log(response.response)
setLeague([response.response])
        
      })
  }, [])

  return (
    <>
      <div className='leagues'>
        <div>
          <Searchbar
            placeholder="Search..."
          />
        </div>
        {league && league[count++].map((ligi)=>(
          <div className='dataItem' key={ligi.league.id}>
            <img src={ligi.league.logo }/> 
          <p>{ligi.league.name }</p>
        </div>
        ))}
      </div>
    </>

  )
}

