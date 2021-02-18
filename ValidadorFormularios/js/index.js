const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');

// Mostrar error en input
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Mostrar correcto en input
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Validar email con expresión regular
function esEmailValido(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value).toLowerCase()))
    {
        showSuccess(input);
    } else {
        showError(input, `El email no es valido`);
    }
}

// comprobar campo requerido
function comprobarRequerido(inputArr) {
    inputArr.forEach(element => {
        if(element.value==='') {
            showError(element, `El campo ${obtenerNombreCampo(element)} es requerido`);
        } else {
            showSuccess(element);
        }
    });
}

function obtenerNombreCampo(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// comprobar longitud de campo
function comprobarLongitud(input, min, max) {
    if(input.value.length < min) {
        showError(input, `El campo  ${obtenerNombreCampo(input)} debe tener al menos ${min}`);
    } else if(input.value.length > max) {
        showError(input, `El campo  ${obtenerNombreCampo(input)} debe tener menos de ${max}`);
    } else {
        showSuccess(input)
    }
}

function comprobarPasswordsCorrectos(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, "Las contraseñas no son iguales");
    } 
}

function comprobarPasswordContieneValorValido(input) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,25}$/;
    console.log(re);
    if(re.test(String(input.value)))
    {
        showSuccess(input);
    } else {
        showError(input, `El password no cumple los requisitos.`);
    }
}

/// Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    comprobarRequerido([username, email, password1, password2]);
    comprobarLongitud(username, 3, 25);
    comprobarLongitud(password1, 6, 25);
    comprobarLongitud(password2, 6, 25);
    esEmailValido(email);
    comprobarPasswordsCorrectos(password1,password2);
    comprobarPasswordContieneValorValido(password1);
});