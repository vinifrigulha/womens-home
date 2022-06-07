/* ===== Constantes principais ===== */
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')

/* ===== Exibição do menu em mobiles ===== */
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu)

/* ===== O sublinhado dinâmico ao rolar a página ===== */
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const newsMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  
  // Adiciona um sublinhado na tag "Home"
  if (window.innerWidth > 960 && scrollPos < 800) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    newsMenu.classList.remove('highlight');
    return;
  }

  // Adiciona um sublinhado na tag "Sobre Nós"
  else if (window.innerWidth > 960 && scrollPos < 1600) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    newsMenu.classList.remove('highlight');
    return;
  } 

  // Adiciona um sublinhado na tag "Notícias"
  else if (window.innerWidth > 960 && scrollPos < 2345) {
    newsMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    return;
  }
  
  // Não mostrar o texto sublinhado no menu mobile
  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

/* ===== Adiciona o efeito de scroll ao clicar em uma tag, sublinhando-o ===== */
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
  
/* ===== Fecha o menu mobile quando clica em alguma tag ===== */
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 1000 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
  }
};
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

/* ===== FIM :) ===== */
