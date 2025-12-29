$(document).ready(function() {
    console.log("jQuery cargado y listo.");

    // 1. SMOOTH SCROLL (Desplazamiento Suave)
    // Seleccionamos todos los enlaces de la navbar
    $('.nav-links a, .btn-primary').on('click', function(event) {
        // Aseguramos que el enlace tenga un hash (#seccion)
        if (this.hash !== "") {
            event.preventDefault();

            const target = this.hash;

            // Animamos el scroll del body y html
            $('html, body').animate({
                scrollTop: $(target).offset().top - 70 // Restamos 70px por la navbar fija
            }, 800); // 800ms de duración
        }
    });

    // 2. REFACTORIZACIÓN DE VALIDACIÓN CON JQUERY
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        // Captura de valores con jQuery
        const nombre = $('#nombre').val().trim();
        const email = $('#email').val().trim();
        const mensaje = $('#mensaje').val().trim();
        const $feedback = $('#feedbackMessage');

        // Resetear estilos de feedback
        $feedback.hide().removeClass('success-message error-message');

        // Validación Lógica
        if (nombre === "" || email === "" || mensaje === "") {
            // Mostrar error con efecto de entrada
            $feedback.html('⚠️ Por favor, completa todos los campos para continuar.')
                     .addClass('error-message')
                     .slideDown(400);
            
            // Animación de "sacudida" en el botón si hay error
            $('#btnSubmit').animate({ marginLeft: "-10px" }, 50)
                           .animate({ marginLeft: "10px" }, 50)
                           .animate({ marginLeft: "0px" }, 50);
        } else {
            // Mostrar éxito
            $feedback.html(`✅ ¡Excelente, ${nombre}! Tu mensaje ha sido enviado con éxito.`)
                     .addClass('success-message')
                     .fadeIn(600);
            
            // Limpiar formulario con JS nativo (trigger reset)
            $('#contactForm')[0].reset();
        }
    });

    // Bonus: Efecto de cambio de fondo en la navbar al hacer scroll
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').css('background', 'rgba(15, 23, 42, 0.95)');
        } else {
            $('.navbar').css('background', 'rgba(15, 23, 42, 0.8)');
        }
    });
});