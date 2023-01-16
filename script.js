'use script'

let burger = document.querySelector('.burger');
let menu = document.querySelector(".nav")
let body = document.querySelector('body');

burger.addEventListener('click', ()=> {
    burger.classList.toggle('bur')
    menu.classList.toggle('ma')
    body.classList.toggle('_lock')
})
