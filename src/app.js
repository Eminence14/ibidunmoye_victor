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



// Make header fixed on scroll
const header = document.querySelector('header')
const introSection = document.querySelector('.intro_section')
window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 50) {
        header.classList.add('active')
        introSection.classList.add('active')
    } else {
        header.classList.remove('active')
        introSection.classList.remove('active')
    }
})

// remove the side nav on click of an anchor tag
const navLinks = document.querySelectorAll('nav ul a')

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        openHamburger()
    })
})



// Send email to my account
const sendMailBtn = document.querySelector('.submit_contact_form')
sendMailBtn.addEventListener('click', sendMail)

function sendMail(e) {
    e.preventDefault()
    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    emailjs.send("service_blq4173", "template_zjr5eyo", params)
    .then(() => {
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('message').value = ''
        alert('message sent')
    }).catch((err) => {
        console.error(err)
    });
}
