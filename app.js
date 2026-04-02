fetch("https://pokeapi.co/api/v2/pokemon")
.then(respuesta => respuesta.json())
.then(dato => {
    dato.results.forEach(pokemon => {
        fetch(pokemon.url)
        .then(respuesta => respuesta.json())
        .then(dato => {
            let tarjeta = document.createElement("div")
            tarjeta.textContent = dato.name
            let imagen = document.createElement("img")
            imagen.src = dato.sprites.other["official-artwork"].front_default
            tarjeta.appendChild(imagen)
            document.getElementById("contenedor").appendChild(tarjeta)
        })
    });
})