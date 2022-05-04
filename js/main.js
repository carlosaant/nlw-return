let navigation = document.getElementById('navigation');

function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

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
}).reveal('#home');
