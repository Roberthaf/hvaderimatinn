import React,{useState} from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import NavigationBar from './NavigationBar';
import Main from './Main';

function App() {

  const [showFoodSelect, setFoodSelect] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function navigateFoodSelect() {
    setFoodSelect(!showFoodSelect);
    setShowRecipe(false);
    setShowMenu(false);
  }

  function navigateToRecipes() {
    setFoodSelect(false);
    setShowRecipe(!showRecipe);
    setShowMenu(false);
  }

  function navigateToMenus() {
    setFoodSelect(false);
    setShowRecipe(false);
    setShowMenu(!showMenu);
  }
  console.log("showFoodSelect",showFoodSelect);
  console.log("showRecipe",showRecipe);
  console.log("showMenu",showMenu);
  return (
    <div className="App">
      <NavigationBar 
        navigateFoodSelect={navigateFoodSelect}
        navigateToRecipes={navigateToRecipes}
        navigateToMenus={navigateToMenus}
      />    
      <Main 
        showMenu={showMenu}
        showRecipe={showRecipe}
        showFoodSelect={showFoodSelect}
      />
    </div>
  );
}

export default withAuthenticator(App);
