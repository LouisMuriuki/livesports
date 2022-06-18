import React, { useState } from 'react'
import './mainbody.css'
function MainBody() {
  const [fixtures, setFixtures] = useState([])
  React.useEffect(() => {
    fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2021-01-29', {
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
        setFixtures(response.response)
      })
  }, [])
  return (
    <div className='mainbody'>
      {fixtures && fixtures.map(fixture =>
        <>
          <div className='top'>
            <img src={fixture.league.logo} /> <p>{fixture.league.name}</p>
            <p>{fixture.league.country}</p>
          </div>
          <div className='middle'>
            <p>{fixture.fixture.date}</p>
            <div className='teams'>
              <div className='team'>
                <img src={fixture.teams.home.logo} /> <p>{fixture.teams.home.name}</p>
              </div>
              <div className='team'>
                <img src={fixture.teams.away.logo} /> <p>{fixture.teams.away.name}</p>
              </div>
              
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MainBody