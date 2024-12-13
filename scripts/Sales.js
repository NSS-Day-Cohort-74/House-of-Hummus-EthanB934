/*
    Problem: This module is trying to access the posted purchases. It is has an incorrect path. This module is the next step after
    the POST request is created in the transient state module.
*/


export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entrees&_expand=vegetables&_expand=sides").then(res => res.json())

    let salesDivs = sales.map(
        (order) => {
            const totalCostOfOrder = 
            parseFloat(order.entrees.price)
           +parseFloat(order.vegetables.price)
           +parseFloat(order.sides.price)
            return `
            Order #${order.id}:
            $${totalCostOfOrder.toFixed(2)}
            `
        }
    )

    salesDivs = salesDivs.join("")

    return salesDivs
}

