// Selecciona el elemento del HTML donde se mostrará el dato
const dataSpan = document.getElementById("data");

// Obtiene el valor guardado en localStorage con la clave "dato"
const storedData = localStorage.getItem("dato");

// Muestra el dato en el span
if (storedData) {
    dataSpan.textContent = storedData;
} else {
    dataSpan.textContent = "No hay datos guardados.";
}
