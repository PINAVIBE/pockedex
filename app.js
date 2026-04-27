fetch("https://pokeapi.co/api/v2/pokemon")
.then(respuesta => respuesta.json())
.then(dato => {
    dato.results.forEach(pokemon => {
        fetch(pokemon.url)
        .then(respuesta => respuesta.json())
        .then(dato => {
            let tarjeta = document.createElement("div")
            tarjeta.classList.add("tarjeta")
            let nombre = document.createElement("p")
            nombre.textContent = dato.name
            tarjeta.appendChild(nombre)
            let imagen = document.createElement("img")
            imagen.src = dato.sprites.other["official-artwork"].front_default
            tarjeta.appendChild(imagen)
            document.getElementById("contenedor").appendChild(tarjeta)
            dato.abilities.forEach(poderes => {
                let habilidad = document.createElement("p")
                habilidad.textContent = poderes.ability.name
                tarjeta.appendChild(habilidad)
            })
            tarjeta.addEventListener("click", () => {
                document.getElementById("modal").style.display = "block"
                document.getElementById("modal-nombre").textContent = dato.name
                document.getElementById("modal-imagen").src = dato.sprites.other["official-artwork"].front_default
                document.getElementById("modal-habilidades").innerHTML = ""
                dato.abilities.forEach(habilidade => {
                    let habilidad = document.createElement("p")
                    habilidad.textContent = habilidade.ability.name
                    document.getElementById("modal-habilidades").appendChild(habilidad)
                })
                
            })
            document.getElementById("cerrar").addEventListener("click", () => {
            document.getElementById("modal").style.display = "none"

            })
           
        })
    });
})