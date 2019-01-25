/* Codigo para hacer funcional Menu Amburgueza*/

let visible = false;

let elemento = document.querySelector("#menu-nav__burger");
elemento.addEventListener("click", mostrarMenu);

function mostrarMenu() {
	let elemento = document.querySelector(".menu-nav");
	if(!visible) {
		// o con elemento.classList.toggle("js-menu"); 
		elemento.classList.add("js-menu");
		visible = true;
	} else {
		elemento.classList.remove("js-menu");
		// o con elemento.classList.toggle("js-menu"); 
		visible = false;
	}
	
}

