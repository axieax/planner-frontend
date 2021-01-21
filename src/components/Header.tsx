import React from 'react';
import './Header.scss';
import Button from './Button';

export default function Header() {
    return (
        <header>
            <h1>UNSW Degree Planner</h1>
            <div className='right-container'>
                <Button>About</Button>
                <Button>Help</Button>
                <Button>Feedback</Button>
                <Button>Dark Mode</Button>
            </div>
        </header>
    )
}
