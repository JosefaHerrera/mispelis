$(document).ready(function() {
    $.ajax({
            url: `https://netflixroulette.net/api/api.php?director=Steven%20Spielberg`,
            type: 'GET',
            datatype: 'JSON',
        })
        .done(function(response) {
            console.log(response);
            response.forEach(function(dataDirector) {
                // Lista de peliculas
                console.log('nombre pelicula ->', dataDirector.show_title);

                // año de lanzamiento
                console.log('año ->', dataDirector.release_year);

                // categoria
                console.log('categoria ->', dataDirector.category);

                // duracion
                console.log('duración ->', dataDirector.runtime);

                // director
                console.log('director ->', dataDirector.director);
            });
        })
        .fail(function() {
            alert('Fallo');
        })
        .always(function() {
            console.log('Yeii')
        });

});