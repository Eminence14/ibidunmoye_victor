const hamburger = document.querySelector('.ham')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')
const menuList = document.querySelector('nav ul')

hamburger.addEventListener('click', openHamburger)
close.addEventListener('click', openHamburger)

function openHamburger() {
    hamburger.style.animation = 'rotPos .4s forwards'
    close.style.animation = 'rotNeg .4s forwards'
    hamburger.classList.toggle('active')
    close.classList.toggle('active')
    nav.classList.toggle('active')
    menuList.style.animation = 'slide-in .4s forwards'
}