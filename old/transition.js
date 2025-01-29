const header = document.getElementById('header')
const body = document.getElementById('body')
// --background-color-light : #3282b8;

// J'en fait une fonction pour pouvoir l'appeler au chargement de la page car
// le scoll n'est pas forcément en haut au chargement.
function onWindowScroll(event) {
// 	if (window.scrollY < 50) {
//   	header.classList.remove('scrolled')
//   } else {
//   	header.classList.add('scrolled')
//   }
	let scrollPercentage = window.scrollY / (document.header.scrollHeight - window.innerHeight);

	document.header.style.backgroundColor = `rgba(0, 100, 200, ${scrollPercentage})`;
	
	document.header.style.opacity = 1 - scrollPercentage;
}

window.addEventListener('scroll', onWindowScroll)