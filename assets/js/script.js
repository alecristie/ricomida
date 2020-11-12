$(function () {

    
    //tooltip 
    $('[data-toggle="tooltip"]').tooltip()

    //carousel
    $('.carousel').carousel()

    //smooth scrolling (navbar)
    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function () {
                window.location.hash = gato;
            });
        }
    });

    //mostrar alerta correo enviado
    $("#enviarcorreo").click(function(event){
        alert ("El correo fue enviado correctamente")
    });
        
    
    //cambiar letras a color rojo
    $(document).ready(function () {
        $("h4").dblclick(function () {
            $(this).css("color", "red");
        });
    });

  
    $('.title').on("click",(function (){
        $('.card-text').toggle();
    }))


});