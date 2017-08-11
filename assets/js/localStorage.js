 /*   $("#btn-enviar").click(function() {
 <div id="texto">
			
		</div>

*/
    $('#btn-enviar').click(function(){        
       
        
        /*Captura de datos escrito en los inputs*/        
        var nom = document.getElementById("first_name").value;
        var ape = document.getElementById("last_name").value;
        var ema = document.getElementById("email").value;
        var pai = document.getElementById("country").value;

        
        
        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("Nombre", nom);
        localStorage.setItem("Apellido", ape);
        localStorage.setItem("Email", ema);
      	localStorage.setItem("Pais", pai);

        
     
    });   


$(document).ready(function(){    
    $('#prueba').click(function(){        
                       
                       
        /*Obtener datos almacenados*/
        var nombre = localStorage.getItem("Nombre");
        var apellido = localStorage.getItem("Apellido");
        var correo = localStorage.getItem("Email");
        var pais = localStorage.getItem("Pais");

       
        
        /*Mostrar datos almacenados*/      
        $('#first_name').html(nombre);
        $('#last_name').html(apellido);
 		$('#mail').html(correo);
 		$('#country').html(pais);

        
    });   
});
