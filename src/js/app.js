'use strict';

// Elementos
const header = document.querySelector('.header');
const barra = document.querySelector('.barra');
const navegacion = document.querySelector('.navegacion');
const menuButton = document.querySelector('.navegacion--menu');

// Barra sticky
const headerObserver = new IntersectionObserver(
  entries => {
    const [entrie] = entries;
    if (!entrie.isIntersecting){
      barra.classList.add('barra--sticky');
    }
    else {
      barra.classList.remove('barra--sticky');
    }
  },
  {
    root: null,
    threshold: 1,
  }
);
headerObserver.observe(header);

// Navegacion
navegacion.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('navegacion__link')) {
  const navegacion__link = e.target.getAttribute('href');
    // Scroll smooth behavior
    document.querySelector(navegacion__link).scrollIntoView({ behavior: 'smooth' });
  }
});



// Menu button
menuButton.addEventListener('click', function (e) {
  e.preventDefault();
  navegacion.classList.toggle('navegacion--active');
});

// Close menu
navegacion.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('navegacion__link')) {
    navegacion.classList.remove('navegacion--active');
  }
});