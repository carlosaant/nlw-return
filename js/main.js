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
