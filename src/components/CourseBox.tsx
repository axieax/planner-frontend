import React, { useState } from 'react';
import './CourseBox.scss';
import Button from './Button';

export default function CourseBox() {
    const [showUnplaced, setShowUnplaced] = useState(true);
    return (
        <div className='CourseBox'>
            <div className="strip">
                <h2>My Courses</h2>
                <div className="strip-secondary">
                    <h3>Displaying all courses</h3>
                    Switch
                </div>
            </div>
            <div className="content">
                <ul>
                    <li>|| Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                    <li>Course 1</li>
                </ul>
            </div>
            <div className="buttonContainer">
                <Button>Add a course</Button>
            </div>
        </div>
    );
}
