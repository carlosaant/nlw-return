let navigation = document.getElementById('navigation');
let backToTopButton = document.getElementById('backToTopButton');

onload = function () {
  // ou window.add....
  document.addEventListener('scroll', onScroll);

  // ao iniciar executar uma vez o onScroll() para inserir a funçao caso seja digitado a pagina diretamente ao meio da pagina sem ter dado scroll, pois o scroll ja vai estar >0
  onScroll();
};

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

// -----------------

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

function showBackToTopButtonOnScroll() {
  // tamanho da tela pra ativar
  if (scrollY > 500) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

// -----------------

function openMenu() {
  // adiciona no body a class CSS menu-expanded
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  // adiciona no body a class CSS menu-expanded
  document.body.classList.remove('menu-expanded');
}

// arrumar sobreposiçao elementos no html css, e o tamanho
// configurar objeto para a função
ScrollReveal({
  origin: 'top', //vai se originar do topo para baixo, de cima para baixo
  distance: '30px',
  duration: 500
}).reveal(`
#home, 
#home img,
#home .stats,
#services,
#services header,
#services card,
#about,
#about header,
#about .content`); //sequencia qual aparece primeiro
