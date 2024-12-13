import { setSidesId } from "./transientState.js"

export const Sides = async () => {
        const response = await  fetch("http://localhost:8088/sides")
        const sides = await response.json()
        document.addEventListener("change", handleSideOptions)
        const sidesListHTML = sides.map(
            (side) => {
                let html = `<div class="sideEntries">`
                html += `
                <input type="radio" name="sides" value="${side.id}"> ${side.title}
                `
                html +="</div>"
                
                return html
            }
        )
    
        return sidesListHTML.join(" ")
    
} 

const handleSideOptions = (changeEvent) => {
    if(changeEvent.target.name === "sides") {
        const valueAsInt = parseInt(changeEvent.target.value)
        setSidesId(valueAsInt)
    }
}