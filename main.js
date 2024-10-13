
        // Función para manejar la selección del tipo de usuario
        function selectUserType(userType) {
            const vendedorFields = document.getElementById('vendedor-fields');
            
            // Muestra los campos de vendedor si se selecciona "vendedor"
            if (userType === 'vendedor') {
                vendedorFields.classList.remove('hidden');
            } else {
                // Oculta los campos de vendedor si se selecciona "fanático"
                vendedorFields.classList.add('hidden');
            }
        }

        // Código para alternar entre formularios de inicio de sesión y registro
        function toggleForms() {
            const loginForm = document.getElementById('login-form-container');
            const registerForm = document.getElementById('register');

            // Alterna la visibilidad de los formularios
            loginForm.classList.toggle('hidden');
            registerForm.classList.toggle('hidden');
        }

        const notificationBtn = document.getElementById('notification-btn');
    const notificationDropdown = document.getElementById('notification-dropdown');

    notificationBtn.addEventListener('click', function() {
        if (notificationDropdown.style.display === 'none') {
            notificationDropdown.style.display = 'block';
        } else {
            notificationDropdown.style.display = 'none';
        }
    });

    // Cerrar el dropdown si se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (!notificationBtn.contains(event.target) && !notificationDropdown.contains(event.target)) {
            notificationDropdown.style.display = 'none';
        }
    });