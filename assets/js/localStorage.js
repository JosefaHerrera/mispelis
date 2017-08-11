    $('#btn-enviar').click(function(){
       
        
        /*Captura de datos escrito en los inputs*/
        var nom = document.getElementById("first_name").value;
        var ape = document.getElementById("last_name").value;
        var ema = document.getElementById("email").value;
        var pai = document.getElementById("country").value;

        
        
        /*Guardando las variables creadas anteriorirmente en las nuevas variables del LocalStorage*/
        //Variable localstorage, VALOR ASGINADO A LA VARIBLE
        localStorage.setItem("Nombre", nom);
        localStorage.setItem("Apellido", ape);
        localStorage.setItem("Email", ema);
      	localStorage.setItem("Pais", pai);

        
     
    });   


$(document).ready(function(){
    $('#prueba').click(function(){


                       
                       
        /*Guarda en variables locales lo que està alamacenado en las varibles del localstorage*/
        var nombre = localStorage.getItem("Nombre");
        $('#first_name span').text(nombre);
        console.log('jkahsdjs')
        var apellido = localStorage.getItem("Apellido");
        var correo = localStorage.getItem("Email");
        var pais = localStorage.getItem("Pais");

       
        
        /*Mostrar con un innerhtml para jquery la variable local*/
        // $('#first_name').html(nombre);
        $('.first-name').append(nombre);
        $('.last_name').html(apellido);
 		$('.email').html(correo);
 		$('.country').html(pais);

        
    });
});
