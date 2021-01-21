import React, { useState } from 'react';
import './CourseBox.scss';
import Button from './Button';


export default function CourseBox() {
    const [showUnplaced, setShowUnplaced] = useState(true);
    return (
        <div className='CourseBox'>
            <div className="container">
                <div className="strip">
                    <h2>My Courses</h2>
                    <div className="strip-secondary">
                        <h3>Displaying all courses</h3>
                        Switch
                    </div>
                </div>
                <div className="content">
                    Course 1
                </div>
            </div>
            <Button>+</Button>
        </div>
    )
}

// NOTE: better to display button as an overlay rather than flexbox
// want switch to move onto the next line for small screens
