function buscarEnLista(lista,item) {
    let loEncontre = false

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === item ) {
            loEncontre = true
        }
    }

    return loEncontre
}


document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("input")
    const button = document.querySelector("button")
    const lista = document.querySelector(".lista")

    const anterioresItems = []
    
    button.addEventListener("click", function() {
        const itemDelUsuario = input.value
        
        if (itemDelUsuario !== "") { //que el texto que se ingrese no esté vacío
        const loIngresoAntes = buscarEnLista(anterioresItems, itemDelUsuario)

            if(!loIngresoAntes) {
                anterioresItems.push(itemDelUsuario) 

            const nuevoElemento = document.createElement("li")
            nuevoElemento.innerHTML = input.value
            
            lista.appendChild(nuevoElemento) 
            }
        }
    })
})
