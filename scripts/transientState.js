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
    console.log(defaultOrder.entreesId)
}

export const setVegetablesId = (valueAsInt) => {
    defaultOrder.vegetablesId = valueAsInt
    console.log(defaultOrder.vegetablesId)

}

export const setSidesId = (valueAsInt) => {
    defaultOrder.sidesId = valueAsInt
    console.log(defaultOrder.sidesId)

}

