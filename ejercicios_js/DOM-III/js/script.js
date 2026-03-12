const form = document.getElementById("myForm");

form.addEventListener("submit",(event) => {
    event.preventDefault(); // Parar el envío del formulario

    console.log(event.target.email.value);
    console.log(event.target.password.value);

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // if(email.length <= 3){
    //     alert("Por favor, mínimo 3 caracteres");
    // }

    // if(!email.includes("@")){ // @@@@@
    //     alert("Por favor, que tenga @");
    // }

    let errorMessage = "";
    
    const nameRegex = /^[A-Za-z]{3,}$/;

    if (!nameRegex.test(name)) {
        errorMessage += "El nombre debe contener solo letras y tener al menos 3 caracteres.\n";
        //alert("El nombre debe contener solo letras y tener al menos 3 caracteres.");
        // return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        errorMessage += "Por favor, introduce un email válido.\n";
        //alert("Por favor, introduce un email válido.");
        // return;
    }

    // Terminar el ejercicio:
    // Contraseña

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        errorMessage += `Por favor, introduce una password válida: 
        - Mínimo 8 caracteres
        - al menos una letra y un número\n`;
        // alert(`Por favor, introduce una password válida: 
        //     - Mínimo 8 caracteres
        //     - al menos una letra y un número`);
        // return;
    }
    

    // Teléfono

    const phone = event.target.phone.value;
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        errorMessage += "Por favor, introduce un número de teléfono válido: exactamente 10 dígitos.\n";
        // alert("Por favor, introduce un número de teléfono válido: exactamente 10 dígitos.");
        // return;
    }
    
    if (errorMessage) {
        // alert(`Hay errores:
        //     ${errorMessage}`);
        document.getElementById("errorMessages").innerHTML = `<pre class="errorMessage">${errorMessage}</pre>`;
    }else{
        //Continúa envío
        alert("Formulario enviado con éxito!");
        document.getElementById("errorMessages").innerHTML = `<p class="success">FORMULARIO ENVIADO</p>`;
        form.reset(); // limpiar formulario
        form.submit(); // continúa con el envío del formulario
    }



})

