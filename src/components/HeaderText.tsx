import React from 'react';
import './HeaderText.css';

interface HeaderTextProps {
    headerText: string;
};

export default function HeaderText(props: HeaderTextProps) {
    return(
        <div className="headerText">
            <h3>{props.headerText}</h3>
        </div>
    )
} 