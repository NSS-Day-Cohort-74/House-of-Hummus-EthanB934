/*
    Problem: This module is generating HTML for the DOM and receiving snippets of HTML from other modules. We can see that 
    the sales module is imported here. The sales module is generating HTML for the purchases. This is where all other functions
    that generate HTML will be imported and invoked. 
*/
import { entreesList } from "./Entrees.js"
import { Sides } from "./SideDishes.js"
import { createNewOrder } from "./transientState.js"
import { Veggies } from "./Vegetables.js"
//import { Sales } from "./Sales.js"

export const FoodTruck = async () => {
    const entreesListHTML = await entreesList()
    const vegetablesListHTML = await Veggies()
    const sidesListHTML = await Sides()
    //const salesHTML = Sales()
 

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>
            <section>
                <h2> Entrées </h2>
                ${entreesListHTML}
            </section>
             <section>
                <h2> Vegetables </h2>
                ${vegetablesListHTML}
            </section>
              <section>
                <h2> Sides </h2>
                ${sidesListHTML}
            </section>
        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            
        </article>

    `
}

const handleNewFoodRequest = (clickEvent) => {
    if(clickEvent.target.id === "purchase") {
        createNewOrder()
    }
}
document.addEventListener("click", handleNewFoodRequest)