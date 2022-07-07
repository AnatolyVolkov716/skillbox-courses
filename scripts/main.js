const burger = document.querySelector('.header__menu__btn');
const navList = document.querySelector('.header__list');
const closeBurgerBtn = document.querySelector('.header__burger_close');

burger.addEventListener('click', function() {
  navList.classList.toggle('show');
});

closeBurgerBtn.addEventListener('click', function() {
  navList.classList.toggle('show');
});