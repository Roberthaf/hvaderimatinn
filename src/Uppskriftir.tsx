import React, { useEffect, useState } from "react";
import "./Uppskrift.css";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createRecipe } from "./graphql/mutations";
import { listRecipes } from "./graphql/queries";
import CreateRecipe from "./components/CreateRecipe";

import awsExports from "./aws-exports";
import { Receipt } from "@material-ui/icons";
Amplify.configure(awsExports);

export default function Uppskriftir(props: any) {
  const [recipes, setRecipes] = useState([]);
  const [navToCeateRecipe, setNavToCeateRecipe] = useState(false);
  const [navToViewRecipe, setToViewRecipe] = useState(false);

  async function listRecipe() {
    try {
      let allReceipes:any = await API.graphql(graphqlOperation(listRecipes));
      console.log(allReceipes);
      setRecipes(allReceipes.data.listRecipes.items)
    } catch (error) {
      console.log(error);
    }
  }

  async function addRecipe(data:any) {
    try {
      await API.graphql(
        graphqlOperation(createRecipe, {
          input: {
            ...data
          },
        })
      );
    } catch (error) {
      console.log("error in creating recipe: ");
    }
  }

  const handleNavigateCreateRecipe = () => {
    setNavToCeateRecipe(!navToCeateRecipe);
    setToViewRecipe(false);
  };

  const handleNavigateViewRecipe = () => {
    setNavToCeateRecipe(false);
    setToViewRecipe(!navToViewRecipe);
  };
    
  const handleSubmit =(e: React.FormEvent, postData: any) => {
    console.log(postData);
    addRecipe(postData);
    e.preventDefault();
  };
  console.log("recipes",recipes);
  return (
    <div id="uppskriftir">
      <button onClick={handleNavigateCreateRecipe}>Create Recipe</button>

      <button onClick={handleNavigateViewRecipe}>View Recipe</button>

      {navToCeateRecipe && (
        <div className="createRecipe">
          <p>Búa til uppskrift</p>
          <CreateRecipe handleSubmit={handleSubmit}/>
        </div>
      )}

      {navToViewRecipe && (
        <div>
          Skoða uppskrift
          <button onClick={listRecipe}> Fetch Recipe</button>
          <div className="recipiesList">
          {recipes.map( 
            (item:any,i:number ) => 
            <div key={`${item.name}-${i}`}>
              <h4>{item.name}</h4>
              <textarea 
              defaultValue={item.text} />
              <h4>{item.link}</h4>
            </div>
            )}
            </div>
        </div>
      )}
    </div>
  );
}

/*
                <div id="pattern">
                <div id="content">
                    Pizza
                    
                    <br></br>
                    <br></br>   
                    Here are some of the sweetest memories I made during the last summer trip to Canada. 
                    What's even more beautiful about it was that it was the first time the entire family got together to spend quality time 
                    with each other. The part I enjoyed the most was the road trips with my cousins whom I met after years. Hugo and Julia 
                    made the best cupcakes I've ever had. Didn't know that they would grow up so fast. Being with them is fun. I wish to spend 
                    more such time with them in future too.

                </div>
            </div>
*/
