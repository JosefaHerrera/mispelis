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

                //dibujar info en la página

                $(".gris").append(
                    `<div class="col s12">
                        <div class="col s12">
                            <div class="col s8">
                                <span class="movie big">${dataDirector.show_title}</span>
                                <span class="year small">${dataDirector.release_year}</span> |
                                <span class="category small">${dataDirector.category}</span>
                            </div>
                            <div class="col s4 offset-s10">
                                <a id="favorite" class="boton waves-light"><i class="material-icons">stars</i></a>
                            </div>
                        </div>
                    </div>
                    <div class="row dat">
                        <div class="col s12">
                            <span class="time small">${dataDirector.runtime} </span>
                            <span class="director small">${dataDirector.director} </span>
                            <span class="rating small">${dataDirector.rating} </span>
                        </div>
                    </div>
                    <hr>`
                );

            });

        })


    .fail(function() {
            alert('Fallo');
        })
        .always(function() {
            console.log('Yeii')
        });

    //inicializacion select

    $('select').material_select();


});