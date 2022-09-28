
function check_formulario() {
    if (document.getElementById('nombre').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert("Completa todos los campos primero!")
    } else {
    document.getElementById('form').submit()
    alert("El formulario ha sido enviado...")
    }
}
function mostrar_popup() {
    document.getElementById('Popup').style.display = "block"
}

function ocultar_popup(){
    document.getElementById('Popup').style.display = "none"
}