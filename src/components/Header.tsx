import React from 'react';
import './Header.scss';
import Button from './Button';

interface HeaderProps {
    nextTheme?: any,
}

export default function Header(props: HeaderProps) {
    return (
        <header>
            <h1>UNSW Degree Planner</h1>
            <div className="rightContainer">
                <Button>About</Button>
                <Button>Help</Button>
                <Button>Feedback</Button>
                <Button onClick={props.nextTheme}>Change Theme</Button>
            </div>
        </header>
    );
}
