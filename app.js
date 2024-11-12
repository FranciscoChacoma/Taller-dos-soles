// Obtener elementos del DOM
const loginContainer = document.querySelector('.login-container');
const closeLoginButton = document.getElementById('close-login');
const loginButton = document.querySelector('.btn-instrumentos');

// Función para abrir el inicio de sesión
function openLogin() {
    loginContainer.style.display = 'flex'; // Muestra el formulario
}

// Función para cerrar el inicio de sesión
function closeLogin() {
    loginContainer.style.display = 'none'; // Oculta el formulario
}

// Abrir el formulario de inicio de sesión cuando se hace click en el botón de inicio de sesión
loginButton.addEventListener('click', openLogin);

// Cerrar el formulario de inicio de sesión cuando se hace click en la X
closeLoginButton.addEventListener('click', closeLogin);

// Cerrar el formulario de inicio de sesión si se hace click fuera de la caja de login
loginContainer.addEventListener('click', (e) => {
    if (e.target === loginContainer) {
        closeLogin();
    }
});

