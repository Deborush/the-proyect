const vendedorBtn = document.getElementById('vendedorBtn');
const compradorBtn = document.getElementById('compradorBtn');
const formContainer = document.getElementById('form-container');
const formTitle = document.getElementById('formTitle');
const extraFields = document.getElementById('extraFields');

function mostrarFormulario(rol) {
    formContainer.style.display = 'block';
    if (rol === 'vendedor') {
        formTitle.textContent = 'Registro de Vendedor';
        extraFields.innerHTML = `
            <label for="businessName" class="block text-sm font-medium text-gray-700">Nombre del Negocio</label>
            <input type="text" id="businessName" name="businessName" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required>
            
            <label for="certification" class="block text-sm font-medium text-gray-700">Certificación o Permisos Legales</label>
            <input type="text" id="certification" name="certification" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required>
        `;
    } else {
        formTitle.textContent = 'Registro de Comprador/Entusiasta';
        extraFields.innerHTML = `
            <label for="interests" class="block text-sm font-medium text-gray-700">Intereses (animales, terrarios, etc.)</label>
            <input type="text" id="interests" name="interests" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
        `;
    }
}

vendedorBtn.addEventListener('click', () => mostrarFormulario('vendedor'));
compradorBtn.addEventListener('click', () => mostrarFormulario('comprador'));

document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado!');
});
