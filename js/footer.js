class Complete_Footer extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <a href="#Up"> <button class="button1 sub">Subir</button> </a>
		<div id="Popup">
            <div id="popupContact">
                <form class="popup-form" action="" id="form" method="post" name="form">
                    <img id="close" src="./Img/x.png" onclick ="ocultar_popup()">
                    <h2 class="popup-h2">Contactanos</h2>
                    <hr class="popup-hr">
                    <input class="popup-input" id="nombre" name="nombre" placeholder="Nombre" type="text">
                    <input class="popup-input" id="pu" name="email" placeholder="Email" type="text">
                    <textarea class="popup-textarea" id="msg" name="mensaje" placeholder="Mensaje"></textarea>
                    <a href="javascript:%20check_formulario()" id="submit">Enviar</a>
                </form>
            </div>
        </div>
        
        <button class="popup-button" id="popup" onclick="mostrar_popup()">Enviar Comentarios</button>
		<footer>Medina Lucas 2022</footer>
        `
    }
}
customElements.define('complete-footer', Complete_Footer)

class Mid_Footer extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
		<div id="Popup">
            <div id="popupContact">
                <form class="popup-form" action="" id="form" method="post" name="form">
                    <img id="close" src="./Img/x.png" onclick ="ocultar_popup()">
                    <h2 class="popup-h2">Contactanos</h2>
                    <hr class="popup-hr">
                    <input class="popup-input" id="nombre" name="nombre" placeholder="Nombre" type="text">
                    <input class="popup-input" id="pu" name="email" placeholder="Email" type="text">
                    <textarea class="popup-textarea" id="msg" name="mensaje" placeholder="Mensaje"></textarea>
                    <a href="javascript:%20check_formulario()" id="submit">Enviar</a>
                </form>
            </div>
        </div>
        
        <button class="popup-button" id="popup" onclick="mostrar_popup()">Enviar Comentarios</button>
		<footer>Medina Lucas 2022</footer>
        `
    }
}
customElements.define('mid-footer', Mid_Footer);