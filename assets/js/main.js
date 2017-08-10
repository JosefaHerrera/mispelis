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


    // hacer un evento por el boton de la vista lista-peliculas.html
    $.ajax({
            // esta debe variar segun el click
            url: `https://netflixroulette.net/api/api.php?title=Hook`,
            type: 'GET',
            datatype: 'JSON',
        })
        .done(function(responseMovie) {
            console.log(responseMovie);
            //foto
            console.log('url poster', responseMovie.poster);
            $('.img-movie').append(`
                <img src="${responseMovie.poster}" class="img-desdeapi">
            `);
            $('.rating').append(`
                <div>${responseMovie.rating}</div>
            `);
            $('.title-movie').append(`
                
                <div class="title-desdeapi">
                    ${responseMovie.show_title}  <span class="category-desdeapi">${responseMovie.category}</span>
                </div>               
            `);
            $('.description-movie').append(`
                ${responseMovie.summary}
            `);
            $('.people-cast').append(`
                ${responseMovie.show_cast}
            `);
        })
        .fail(function() {
            alert('Fallo');
        })
        .always(function() {
            console.log('Yeii')
        });

});