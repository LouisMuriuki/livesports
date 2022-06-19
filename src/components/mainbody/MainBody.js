import React, { useEffect, useState } from 'react'
import './mainbody.css'
function MainBody() {
  const [fixtures, setFixtures] = useState(JSON.parse(localStorage.getItem('fixtures')) || [])
  // React.useEffect(() => {
  //   fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2021-01-29', {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  //       "x-rapidapi-key": "5cd111ac4bmsh54c7b075217b5abp116193jsne0a526846336"
  //     }
  //   })
  //     .then(data => {
  //       return data.json()
  //     }).then(response => {
  //       console.log(response.response)
  //       setFixtures(response.response)
  //     })
  // }, [])

  useEffect(() => {
    localStorage.setItem('fixtures', JSON.stringify(fixtures))
  }, [fixtures])
  return (
    <div className='mainbody'>
      {fixtures && fixtures.map((fixture,i) =>
        <div key={i}>
          <div className='top'>
            <img src={fixture.league.logo} /> <p style={{ marginLeft: '10px' }}>{fixture.league.name}</p>
          </div>
          <div className='topmiddle'>
            <p style={{fontSize:'13px'}}>{fixture.league.country}</p>
          </div>
          <div className='middle'>
            <p style={{width:'maxContent'}}>{new Date(fixture.fixture.timestamp).toLocaleTimeString()}</p>
            <div className='teams'>
              <div className='team'>
                <img src={fixture.teams.home.logo} /> <p style={{marginLeft:'10px'}}>{fixture.teams.home.name}</p>
                <div className='score'>
                  <p >{fixture.score.fulltime.home}</p>
                </div>
              </div>
              <div className='team'>
                <img src={fixture.teams.away.logo} /> <p style={{marginLeft:'10px'}}>{fixture.teams.away.name}</p>
                <div className='score'>
                  <p >{fixture.score.fulltime.away}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainBody