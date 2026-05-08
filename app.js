async function obtenerPeliculas(){

    // Conexion con la API
    const respuesta = await fetch("https://ghibliapi.vercel.app/films");

    // Convertir datos
    const datos = await respuesta.json();

    console.log(datos);

    // Variable para guardar tarjetas
    let peliculasHTML = "";

    // Recorrer TODAS las peliculas
    datos.forEach(pelicula => {

        peliculasHTML += `

        <div class="movie-card">

            <h2>
                ${pelicula.title}
            </h2>

            <h3>
                ${pelicula.original_title}
            </h3>

            <img 
            src="${pelicula.image}" 
            alt="${pelicula.title}">

            <p>
                <strong>Director:</strong>
                ${pelicula.director}
            </p>

            <p>
                <strong>Año:</strong>
                ${pelicula.release_date}
            </p>

            <p>
                <strong>Duracion:</strong>
                ${pelicula.running_time} minutos
            </p>

            <p>
                <strong>Puntuacion:</strong>
                ${pelicula.rt_score}
            </p>

            <p>
                ${pelicula.description}
            </p>

        </div>

        `;

    });

    // Imprimir TODO en el HTML
    document.getElementById("contenedor").innerHTML = peliculasHTML;

}

// Ejecutar funcion
obtenerPeliculas();