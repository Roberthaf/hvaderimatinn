import React, {useState} from 'react';
import './Main.css';
/* import Uppskrift from './Uppskrift'; */
import HeaderText from './components/HeaderText';
import NavigationButton from './components/NavigationButton';
import Uppskrift from "./Uppskrift";

export default function Main(){

    const [eat, setEat] = useState(false);
    const [recipe, setRecipe] = useState(false);
    const [menu, setMenu] = useState(false);

    function handlePageEat(){
        setEat(!eat);
        setRecipe(false);
        setMenu(false);
    };

    function handlePageRecipe(){
        setEat(false);
        setRecipe(!recipe);
        setMenu(false);
    };

    function handlePageMenu(){
        setEat(false);
        setRecipe(false);
        setMenu(!menu);
    };

    const fakeData = {  
        id: 1,
        name: "Mauk",
        link: "https://www.ruv.is/frett/gleymdar-kokur-nigellu",
        text: "100g leir, 100g vatn 50mg salt"
    };

    console.log("pageSelection",eat);
    
    return(
        <div id="main">
            <HeaderText 
                headerText={"Hvað er í matinn"}
            />
            <div>
                <NavigationButton 
                    name={"Hvað á ég að borða?"}
                    handleChange={handlePageEat}
                    id={'borda'}
                />
                
                <NavigationButton 
                    name={"Mínar uppskriftir"}
                    handleChange={handlePageRecipe}
                    id={'uppskriftir'}
                />
                <NavigationButton 
                    name={"búa til matseðil"}
                    handleChange={handlePageMenu}
                />  
            </div>
            {
                eat ? <div>Þú átt að borða kfc</div> : ''
            }
            {
                recipe ? <Uppskrift /> : ''
            }
            {
                menu ? <div>Þetta er menu</div> : ''
            }
        </div>
    )
};