/* Codigo para hacer funcional Menu Amburgueza*/

let visible = false;

let elemento_p = document.querySelector("#menu-nav__burger");
elemento_p.addEventListener("click", mostrarMenu);



function mostrarMenu() {
	let elemento = document.querySelector(".menu-nav");
	elemento_p.getAttribute("src")
	if(!visible) {
		elemento_p.setAttribute("src","img/eliminar.png")
		elemento.classList.add("js-menu");
		visible = true;
	} else {
		elemento_p.setAttribute("src","img/menu.png")
		elemento.classList.remove("js-menu");
		visible = false;
	}
	/* O simplemento boro todo y dejo :
	let elemento = document.querySelector(".menu-nav");
	elemento.classList.toggle("js-menu");
	*/
}

