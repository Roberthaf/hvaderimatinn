import React from 'react';
import Paper from '@material-ui/core/Paper';
import './Main.css';

/* import HeaderText from "./components/HeaderText";
import Uppskriftir from "./Uppskriftir"; */

interface MainProps {
  showMenu: boolean;
  showRecipe: boolean;
  showFoodSelect: boolean;
}

export default function Main(props: MainProps) {
  return (
    <Paper elevation={3} id='main'>
      <> Hvað er í matinn</>
      {/* <HeaderText headerText={"Hvað er í matinn"} /> */}
      {/* {props.showRecipe && <Uppskriftir />}
        {props.showMenu && <div>Menu</div>}
        {props.showFoodSelect && <div>Velja Mat</div>} */}
    </Paper>
  );
}
