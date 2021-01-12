import React from "react";
import "./Main.css";
import HeaderText from "./components/HeaderText";
import Uppskriftir from "./Uppskriftir";

interface MainProps {
  showMenu: boolean;
  showRecipe: boolean;
  showFoodSelect: boolean;
}

export default function Main(props:MainProps) {
  
  return (
    <div id="main">
      <HeaderText headerText={"Hvað er í matinn"} />
        {props.showRecipe && <Uppskriftir />}
        {props.showMenu && <div>Menu</div>}
        {props.showFoodSelect && <div>Velja Mat</div>}
    </div>
  );
}
