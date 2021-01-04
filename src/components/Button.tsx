import React from "react";

interface ButtonProps{
    handleOnClick: () => void;
    name: string;
    id: string;

};

export default function Button(props: ButtonProps){
    
    return <button 
        id={props.id} 
        onClick={props.handleOnClick}
        > {props.name}anys
        </button>
}