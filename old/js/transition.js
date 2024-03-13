const header = document.getElementById('header')

// J'en fait une fonction pour pouvoir l'appeler au chargement de la page car
// le scoll n'est pas forcément en haut au chargement.
function onWindowScroll(event) {
	if (window.scrollY < 20) {
  	header.classList.remove('scrolled')
  } else {
  	header.classList.add('scrolled')
  }
}

window.addEventListener('scroll', onWindowScroll)