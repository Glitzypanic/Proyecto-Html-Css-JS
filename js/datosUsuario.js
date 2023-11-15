function datosUsuario(nick) {
    sessionStorage.setItem('nick', nick.value)
}

function mostrarDatosUsuarios() {
    let nick = sessionStorage.getItem('nick')
    console.log(nick);
}
