/*
    This module will store a default object that will be modified when the user selects options displayed on the browser.
    We are not yet at the point for creating this module's functions, but the module needed to be created.
*/

const defaultOrder = 
{
    id: 0,
    entreesId: 0,
    vegetablesId: 0,
    sidesId: 0
}

export const setEntreesId = (valueAsInt) => {
    defaultOrder.entreesId = valueAsInt
}

export const setVegetablesId = (valueAsInt) => {
    defaultOrder.vegetablesId = valueAsInt

}

export const setSidesId = (valueAsInt) => {
    defaultOrder.sidesId = valueAsInt

}

export const createNewOrder = async () => {
    const mealRequest = {
        method: "POST",
        headers:
        {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(defaultOrder)
    }
    const response = await fetch("http://localhost:8088/purchases", mealRequest)
}