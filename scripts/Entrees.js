export const entreesList = async () => {
    const response = await  fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

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