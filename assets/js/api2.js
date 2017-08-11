$(document).ready(function() {

    //solo para llamar pelicula listadas por director

    $.ajax({
            url: `https://netflixroulette.net/api/api.php?director=Steven%20Spielberg`,
            type: 'GET',
            datatype: 'JSON',
        })
        .done(function(response) {
            console.log(response); //todo lo que haga ocurre acá

            response.forEach(function(data) {
                console.log(data.show_title);
                console.log(data.release_year);
                console.log(data.category);
            })

        })
        .fail(function() {
            alert('Fallo');
        })
        .always(function() {
            console.log('Yeii')
        });


});