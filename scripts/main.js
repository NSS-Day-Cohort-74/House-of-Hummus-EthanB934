/*
    Problem: We are not importing the generated HTML to this module, but rather importing the Food Truck function which 
    contains all HTML code. We are simply invoking the FoodTruck() function here to inject the DOM target. There is not much that
    needs to be done to this module, most of the logic will be in the FoodTruck module. 

    There is no module created for transient state. We will certainly need that. 
*/
import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()

