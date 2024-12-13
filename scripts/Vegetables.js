import { setVegetablesId } from "./transientState.js"

export const Veggies = async () => {
        const response = await  fetch("http://localhost:8088/vegetables")
        const vegetables = await response.json()
        document.addEventListener("change", handleVegetableOptions)
        const vegetablesListHTML = vegetables.map(
            (vegetable) => {
                let html = `<div class="vegetableEntries">`
                html += `
                <input type="radio" name="vegetables" value="${vegetable.id}"> ${vegetable.type}
                `
                html +="</div>"
                
                return html
            }
        )
    
        return vegetablesListHTML.join(" ")
    
} 

const handleVegetableOptions = (changeEvent) => {
    if(changeEvent.target.name === "vegetables") {
        const valueAsInt = parseInt(changeEvent.target.value)
        setVegetablesId(valueAsInt)
    }
}