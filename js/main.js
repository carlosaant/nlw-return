let navigation = document.getElementById('navigation');
let backToTopButton = document.getElementById('backToTopButton');
let checkDarkMode = document.getElementById('checkDarkMode');

onload = function () {
  // ou window.add....
  document.addEventListener('scroll', onScroll);
  checkDarkMode.addEventListener('change', checkDarkModeHasChecked);

  // ao iniciar executar uma vez o onScroll() para inserir a funçao caso seja digitado a pagina diretamente ao meio da pagina sem ter dado scroll, pois o scroll ja vai estar >0
  onScroll();
};

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(testimonials);
  activateMenuAtCurrentSection(contact);
}

function checkDarkModeHasChecked() {
  if (this.checked) {
    document.documentElement.classList.add('dark-mode');
    console.log('Checkbox foi marcado');
  } else {
    document.documentElement.classList.remove('dark-mode');
    console.log('Checkbox foi desmarcado');
  }
}

// -----------------

// colocar selecionado/activate no menu qndo estiver em section X
// a logica se da, imaginando uma linha imaginaria cortando o meio da pagina, e quando uma topo de um section estiver pasando por essa linha e parte debaixo abaixo da linha, atraves do posicionamento do scrollbar (scrollY), e a porção de altura da pagina(innerHeight) dividingo ao meio tera a metade da altura da tela.  para ter a visao de onde esta na linha imaginaria: scrollY + innerHeight/2 e verificar qual section o Scroll ta passando.
function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  // ---- verificar se a section passou da linha
  // quais dados vou precisar?

  // offsetTop retorna o topo da section
  const sectionTop = section.offsetTop;
  // offsetHeight retorna a altura da section
  const sectionHeight = section.offsetHeight;

  // o topo da section chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  // informaçoes dos dados e da logica
  console.log(
    'O topo da section chegou ou passou da linha alvo(imaginaria)?',
    sectionTopReachOrPassedTargetLine
  );

  // ---- verificar se a base esta abaixo da linha alvo
  // quais dados vou precisar?

  // a section termina onde? - a base de fato, não so onde a section termina
  const sectionEndsAt = sectionTop + sectionHeight;

  // o final da section passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  console.log(
    'O final da section passou da linha alvo(imaginaria)?',
    sectionEndPassedTargetLine
  );

  // --- limites da section
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine; //negando pois ambos precisam ser true para a section estar dentro da linha alvo

  // pegar elemento do menu para poder adicionar a classe active
  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}`);

  // sempre começa removendo, pois vai adicionar caso seja True
  menuElement.classList.remove('active');
  if (sectionBoundaries) {
    menuElement.classList.add('active');
    //
    console.log('Estou na section: ', section);
  }
}

// ----

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
#about .content,
#testimonials header,
#testimonials .testimonial,
#contact`); //sequencia qual aparece primeiro

// ------------ TESTIMONIALS CAROUSEL SLIDER SWIPER

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});
