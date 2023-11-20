/** 
    * JS para la comprobación de datos del Formulario de entrada
    * @author Jose farias; jose.fariasdv@gmail.com
    * @link https://github.com/Glitzypanic/Proyecto-Html-Css-JS GitHub
*/

// Initialization de var, objetos, DOM
var nickInput
var emailInput
var tamanoInput
var formEntrada
var error
var avatarItems
var itemImg
var avatarContainer

// Funciones de eventos
/**
 * Comprueba los datos correctos del formualrio de entrada
 * @param  {EventObject} event Evento que salta al realizar submit
 */
function comprobarForm(event) {
    // Comprobar cambios
    if (nickInput.value.match(/((?<!\S))[0-9]/)) {
        
        nickInput.focus()
        event.preventDefault()
        error.innerText = "El campo de nick no puede comenzar con un numero"
        return false
    }else if (tamanoInput.value=='0') {
                
        tamanoInput.focus()
        event.preventDefault()
        error.innerText = "Se debe seleccionar un tamaño de panel"
        return false
    }
    // Información es correcta
        datosUsuario(nickInput, tamanoInput, emailInput)
        historicoUsuarios(nickInput)
        return true
}

function moviendoImg(event) {
    itemImg = event.target
    console.log(itemImg.src);
}
function cambiarImg(event) {
    avatarContainer.src = itemImg.src
    console.log(itemImg.src);
}

/**
 * Carga de objetos del DOM, comprobaciones y eventos del formulario
 */
function domCargado() {
    // Captura de todos los Elements
    nickInput = document.getElementById('nick')
    emailInput = document.getElementById('email')
    tamanoInput = document.getElementById('tamano')
    formEntrada = document.getElementById('formEntrada')
    error = document.getElementById('error')

    // Comprobar si hay algún error de juego.html
    if (sessionStorage.getItem('error') != null) {
        error.innerText = sessionStorage.getItem('error')
        sessionStorage.removeItem('error')
    }
    formEntrada.addEventListener('submit', comprobarForm)

    avatarItems = document.getElementsByClassName('avatarImgItem')
    // Eventos del drag and drop
    for (let item of avatarItems) {
        item.addEventListener('dragstart', moviendoImg)
    }
    avatarContainer = document.getElementById('avatarImg')
    avatarContainer.addEventListener('dragover', event => {event.preventDefault()})
    avatarContainer.addEventListener('drop', cambiarImg)
}

// Inicio de carga de eventos
document.addEventListener('DOMContentLoaded', domCargado)
// Geolocalizacion
datoGeolocalizacion()






