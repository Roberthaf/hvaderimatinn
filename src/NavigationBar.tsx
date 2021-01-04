import React from 'react';
import './NavigationBar.css';

export default function NavigationBar(){
    return(
    <div className="navigationBar">
        <div className="navItem">Heim</div>
        <div className="navItem">Uppskriftir</div>
        <div className="navItem">Velja matseðil</div>
    </div>
    );
};