import React, {useEffect, useState} from 'react';
import './Uppskrift.css';
import Amplify, {API, graphqlOperation} from 'aws-amplify';


import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export default function Uppskrift(props: any) {
    const [recipe, setRecipe] = useState([{}]);

    async function fetchRecipe(){
        try {
            
        } catch (error) {
            
        }
    }
    return (
        <div id="uppskrift">
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
        </div>
    )
}