fetch("https://pokeapi.co/api/v2/pokemon")
.then(respuesta => respuesta.json())
.then(dato => {
    dato.results.forEach(pokemon => {
        fetch(pokemon.url)
        .then(respuesta => respuesta.json())
        .then(dato => {
            let tarjeta = document.createElement("div")
            tarjeta.textContent = dato.name

            document.getElementById("contenedor").appendChild(tarjeta)
        })
    });
})