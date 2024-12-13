export const Veggies = async () => {
        const response = await  fetch("http://localhost:8088/vegetables")
        const vegetables = await response.json()
    
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
