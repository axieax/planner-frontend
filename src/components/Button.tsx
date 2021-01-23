import React from 'react';
import './Button.scss';

interface ButtonProps {
    onClick?: any,
    children?: string,
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    );
}
