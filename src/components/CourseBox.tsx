import React, { useState } from 'react'

export default function CourseBox() {
    const [showUnplaced, setShowUnplaced] = useState(true);
    return (
        <div className='CourseBox'>
            You have selected...
        </div>
    )
}
