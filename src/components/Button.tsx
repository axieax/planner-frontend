import React from 'react';
import './Button.scss';

interface ButtonProps {
    children?: string,
}

export default function Button(props: ButtonProps) {
    return (
        <button>
            {props.children}
        </button>
    )
}
