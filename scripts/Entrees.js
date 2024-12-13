import { setEntreesId } from "./transientState.js"

export const entreesList = async () => {
    const response = await  fetch("http://localhost:8088/entrees")
    const entrees = await response.json()
    document.addEventListener("change", handleEntreeOptions)
    const entreesListHTML = entrees.map(
        (entree) => {
            let html = `<div class="entreeEntries">`
            html += `
            <input type="radio" name="entrees" value="${entree.id}"> ${entree.name}
            `
            html +="</div>"
            
            return html
        }
    )

    return entreesListHTML.join(" ")
}

const handleEntreeOptions = (changeEvent) => {
    if(changeEvent.target.name === "entrees") {
        const valueAsInt = parseInt(changeEvent.target.value)
        setEntreesId(valueAsInt)
    }
} 