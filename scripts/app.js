/* Codigo para hacer funcional Menu Amburgueza*/

let visible = false;

let elemento = document.getElementById("menu-nav__burger");
elemento.addEventListener("click", mostrarMenu);

function mostrarMenu() {
	let elemento = document.getElementById("menu-nav");

	if(!visible) {
		elemento.style.display = "block";
		visible = true;
	} else {
		elemento.style.display = "none";
		visible = false;
	}
}
