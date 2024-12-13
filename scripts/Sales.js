/*
    Problem: This module is trying to access the posted purchases. It is has an incorrect path. This may not be a module meant for
    the transient state to become permanent, but rather the generator for the total cost of the each order. 
*/


export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/orders").then(res => res.json())

    let salesDivs = sales.map()

    salesDivs = salesDivs.join("")

    return salesDivs
}

