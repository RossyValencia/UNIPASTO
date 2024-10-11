// script.js
const select = document.getElementById('universidad-select');
const informacion = document.getElementById('informacion-universidad');

select.addEventListener('change', () => {
    const selectedValue = select.value;

    if (selectedValue === "") {
        // Limpia la información si no se selecciona una universidad
        informacion.innerHTML = "";
    } else {
        // Muestra la información de la universidad seleccionada
        informacion.innerHTML = `
            <h2>${selectedValue}</h2>
            <p>Aquí puedes agregar información específica de la universidad seleccionada.</p>
        `;
    }
});