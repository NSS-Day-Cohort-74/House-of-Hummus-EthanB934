export const Sides = async () => {
        const response = await  fetch("http://localhost:8088/sides")
        const sides = await response.json()
    
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


