$(document).ready(function() {
    var params = new URLSearchParams(location.search.slice(1));

    if (params.get('name')) {
        $.ajax({
                // esta debe variar segun el click
                url: `https://netflixroulette.net/api/api.php?title=${params.get('name')}`,
                type: 'GET',
                datatype: 'JSON',
            })
            .done(function(responseMovie) {
                //console.log(responseMovie);
                //foto
                //console.log('url poster', responseMovie.poster);
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
    }

});