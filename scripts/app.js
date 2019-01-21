/* Codigo para hacer funcional Menu Amburgueza*/

let visible = false;

let elemento = document.getElementById("menu-nav__burger");
elemento.addEventListener("click", mostrarMenu);

function mostrarMenu() {
	let elemento = document.querySelector(".menu-nav");
	let myClass = elemento.getAttribute("class");
	if(!visible) {
		elemento.setAttribute("class","menu-nav js-menu");
		visible = true;
	} else {
		elemento.setAttribute("class","menu-nav");;
		visible = false;
	}

}
