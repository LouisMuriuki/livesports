import React, { useEffect, useState } from 'react'
import './table.css'
function Table() {
    let count=0
    const [standing, setStanding] = useState(JSON.parse(localStorage.getItem('standing'))||[])
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5cd111ac4bmsh54c7b075217b5abp116193jsne0a526846336',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        fetch('https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league=39', options)
            .then(response => response.json())
            .then(response => setStanding(response.response)  )
            .catch(err => console.error(err));

    }, [])
    console.log(standing)
    useEffect(() => {
        localStorage.setItem('standings', JSON.stringify(standing))
      }, [standing])
    return (
        <div className='standing' >
            <label htmlFor='seasons'>Seasons:</label>
            <select id='seasons'>
                <option value='2022'>2022-2023</option>
                <option value='2021'>2021-2022</option>
                <option value='2020'>2020-2021</option>
                <option value='2019'>2019-2020</option>
                <option value='2018'>2018-2019</option>
                <option value='2017'>2017-2018</option>
                <option value='2016'>2016-2017</option>
                <option value='2015'>2015-2016</option>
                <option value='2014'>2014-2015</option>
                <option value='2013'>2013-2014</option>
            </select>
            {standing && standing.map((stand, i) => {
                return (
                    <div className='tablecontainer'>
                       <table key={i} >
                        <thead>
                        <tr>
                                <th>#</th>
                                <th>TEAM</th> 
                                <th>P</th> 
                                <th>PTS</th> 
                                <th>GD</th>  
                            </tr>
                        </thead>
                        <tbody>   
                            {stand.league.standings[i].map((table,i)=>{
                                return(
                                <tr>
                                <td>{table.rank}</td>
                                <td style={{display:'flex',alignItems:'center',gap:'5px'}}>{<img src={table.team.logo}/>}{table.team.name}</td>
                                <td >{table.all.played}</td>
                                <td >{table.points}</td>
                                <td >{table.goalsDiff}</td>
                                </tr>)
                                
                            }) }     
                        </tbody>
                    </table> 
                    </div>
                    
                )

            })}

        </div>
    )
}

export default Table