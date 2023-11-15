// Inicializacion de var, objetos, DOM
const nickInput = document.getElementById('nick')
const tamanoInput = document.getElementById('tamano')
const formEntrada = document.getElementById('formEntrada')
const error = document.getElementById('error')


// Funciones de eventos
function comprobarForm(event) {
    if (nickInput.value.match(/((?<!\S))[0-9]/)) {
        
        nickInput.focus()
        event.preventDefault()
        error.innerText = "El campo de nick no puede comenzar con un numero"
        return false
    }else if (tamanoInput.value=='0') {
                
        tamanoInput.focus()
        event.preventDefault()
        error.innerText = "Se debe seleccionar un tamano de panel"
        return false
    }
    // Informacion es correcta
        datosUsuario(nickInput)
        return true
}

// Inicio de carga de eventos
formEntrada.addEventListener('submit', comprobarForm)


