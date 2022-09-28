class Barranavegacion extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
		<a name="Up">&nbsp</a>
		<header>
			<input type="checkbox" id="boton-menu">
			<label for="boton-menu"><img src="./Img/Icono_menu.png"></label>
			<nav class="menu">
				<ul>
					<li> <a href="index.html"> Inicio </a> </li>
					<li> <a href="register.html"> Registro </a> </li>
					<li> <a href="about.html"> Acerca de </a> </li>
				</ul>
			</nav>
		</header>
        `
    }
}
customElements.define('nav-bar', Barranavegacion)