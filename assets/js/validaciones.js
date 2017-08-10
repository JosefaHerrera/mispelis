//Expresión para validar un correo electrónico expresiones regulares
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

    // al hacer click en el btn-enviar, empezará a validar el formulario
    $("#btn-enviar").click(function() {
        var name = $("#first_name").val();
        var lastname = $("#last_name").val();
        var mail = $("#email").val();
        var country = $("#country").val();


        if (name == "") {
            $("#mensaje1").fadeIn("slow");

            return false;
        } else {
            $("#mensaje1").fadeOut();
        }
        if (lastname == "") {
            $("#mensaje2").fadeIn("slow");
            return false;
        } else {
            $("#mensaje2").fadeOut();
            }if (mail == "" || !expr.test(mail)) {
                $("#mensaje3").fadeIn("slow");
                return false;
            } else {
                $("#mensaje3").fadeOut();
                }
                if (country == "") {
                    $("#mensaje4").fadeIn("slow");
                    return false;
                } else {
                    window.location.href = 'perfil.html'

                }
    });
