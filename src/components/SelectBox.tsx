import React, {useState} from 'react'

export default function SelectBox() {
    const [expanded, setExpanded] = useState(false);
    
    
    return (
        <div className='SelectBox'>
            <button onClick={() => setExpanded(!expanded)}>{expanded ? 'X' : '+'}</button>
            {expanded && (
                <>
                <h3>Degree</h3>
                <h2>Select your course</h2>
                </>
            )}
        </div>
    )
}

/* Notes */
// initial state - unexpanded (just a + icon)
