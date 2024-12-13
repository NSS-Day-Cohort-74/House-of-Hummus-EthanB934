/*
    Problem: This module is generating HTML for the DOM and receiving snippets of HTML from other modules. We can see that 
    the sales module is imported here. The sales module is generating HTML for the purchases. This is where all other functions
    that generate HTML will be imported and invoked. 
*/
import { Sales } from "./Sales.js"

export const FoodTruck = () => {
    const salesHTML = Sales()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
