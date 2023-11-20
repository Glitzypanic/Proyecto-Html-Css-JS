/**
    * JS para la gestión de los datos de usuario
    * @author Jose Farias; jose.fariasdv@gmail.com
    * @link https://github.com/Glitzypanic/Proyecto-Html-Css-JS GitHub
 */

var nick
var tamano
var email
var geolocalizacionTxt
var avatar

// sessionStorage

/**
 * Almacenar los datos del ususario en el sessionStorage
 * @date 2023-11-19
 * @param { HTMLElement } nick nick del usuario
 * @param { HTMLElement } tamano tamaño del panel
 * @param { HTMLElement } email email del usuario
 */
function datosUsuario(nick,tamano,email) {
    sessionStorage.setItem('nick', nick.value)
    sessionStorage.setItem('tamano', tamano.value)
    sessionStorage.setItem('email', email.value)
    sessionStorage.setItem('geolocalizacionTxt', geolocalizacionTxt)
    sessionStorage.setItem('avatar', avatar.value)
}

/**
 * Recoge los daots de la sesion del sessionStage
 */
function getDatosUsuarios() {
    nick = sessionStorage.getItem('nick')
    tamano = sessionStorage.getItem('tamano')
    email = sessionStorage.getItem('email')
    avatar = sessionStorage.getItem('avatar')
}

/**
 * Comprueba si existe nick en el sessionStorage
 */
function comprobarDatosUsuario() {
    if (nick == null) {
        sessionStorage.setItem('error', 'No se ha rellenado correctamente los datos del formulario')
        return false
    } 
    return true
}

/**
 * Calcula la geolocalizacion del usuario y la almacena en geolocalizacionTxt
 */
function datoGeolocalizacion () {
    if (!navigator.geolocation) {
        geolocalizacionTxt = 'El navegador no es compatible con API Geolocation'
    }  else {
        navigator.geolocation.getCurrentPosition(
            // Éxito
            (position) => {geolocalizacionTxt = 'Latitud: ' + position.coords.latitude + ', Longitud: ' + position.coords.longitude},
            // Error
            () => {geolocalizacionTxt = 'La geolocalizacion no se ha podido realizar'} 
        )
    }
}

// localStorage



/**
 * Crea y almacena en el localStorage el histórico de entrada
 * 
 * @param  {HTMLElement} nick nick del usuario
 */
function historicoUsuarios (nick) {
    let historicoStorage = localStorage.getItem('historico')
    let historico
    if (historicoStorage == null) {
        historico = []
    } else {
        historico = JSON.parse(historicoStorage)
    }
    let registroUsuario = {
        usuario: nick.value,
        fecha: Date.now()
    }
    historico.push(registroUsuario)
    localStorage.setItem('historico', JSON.stringify(historico))
}