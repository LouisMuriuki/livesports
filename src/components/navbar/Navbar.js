import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav>
                <div className='navheader'>
                    
                    <h1>MATCHDAY</h1>
                </div>
                <div className='nav-item'>
                    <ul>
                        <li>
                            <Link to='/'>
                                <div className='nav-links'>
                                     
                                    Scores
                                </div>
                            </Link>

                        </li>
                        <li>
                            <Link to='/'>
                                <div className='nav-links' >
                                     Odds
                                </div>
                            </Link>
                        </li>
                        <li>
                        <Link to='/'>
                            <div  className='nav-links'>
                                History
                            </div>
                            </Link>
                        </li>

                    </ul>
                </div>

            </nav>

        </>
    )
}

