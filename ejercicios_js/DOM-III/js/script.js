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

    
    const nameRegex = /^[A-Za-z]{3,}$/;

    if (!nameRegex.test(name)) {
        alert("El nombre debe contener solo letras y tener al menos 3 caracteres.");
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        alert("Por favor, introduce un email válido.");
        return;
    }

    // Terminar el ejercicio:
    // Contraseña
    // Teléfono
    

    //Continúa envío
    alert("Formulario enviado con éxito!");

})

