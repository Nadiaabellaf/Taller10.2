// Selecciona los elementos del HTML
const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

// Añade un evento de clic al botón
buttonText.addEventListener("click", () => {
    // Guarda el valor del input en localStorage con la clave "dato"
    localStorage.setItem("dato", inputText.value);
    alert("¡Dato guardado en localStorage!");
});
