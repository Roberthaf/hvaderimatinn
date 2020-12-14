import React from 'react';
import './NavigationButton.css';

export default function NavigationButton(props:any){
    return(
    <div className="navigationButton" onClick={() => props.handleChange(props.id)} >
        <p>{props.name}</p>
    </div>
    )
}