/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {
    const form = document.getElementById('simpleForm');
    const alerta = document.getElementById('mensajeAlerta');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const data = new FormData(form);
            
            let response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'json' }
            });

            if (response.ok) {
                form.reset(); 
                alerta.classList.remove('d-none'); 
                setTimeout(() => {
                    alerta.classList.add('d-none'); /
                }, 5000);
            } else {
                alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
            }
        });
    }
});