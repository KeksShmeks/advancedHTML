'use strict'

let button = document.querySelector('.header-btn__menu-icon');

let navigation = document.querySelector('.header-menu');

let button_close = document.querySelector('.header-menu__close');

button.addEventListener('click', function(){ 
  navigation.classList.toggle('display-block');
});

button_close.addEventListener('click', function(){ 
    navigation.classList.remove('display-block');
  });