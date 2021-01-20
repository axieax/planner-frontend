import React from 'react'
import './Header.scss'

export default function Header() {
    return (
        <header>
            <h1>UNSW Degree Planner</h1>
            <div className='right-container'>
                <button>About</button>
                <button>Help</button>
                <button>Feedback</button>
                <button>Dark Mode</button>
            </div>
        </header>
    )
}
