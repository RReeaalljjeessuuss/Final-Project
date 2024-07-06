let btnOn = document.getElementById('buttonOn')
let menu = document.getElementById('mobile-menu')
let toggleOn = false
btnOn.addEventListener('click', function (event){
    menu.classList.toggle('hide')
    menu.classList.toggle('show')
})
let link1 = document.getElementById('link1')
let link2 = document.getElementById('link2')
let link3 = document.getElementById('link3')
let link4 = document.getElementById('link4')
let link5 = document.getElementById('link5')
link1.addEventListener('click', function () {
    menu.classList.toggle('hide')
    menu.classList.toggle('show')
})
link2.addEventListener('click', function () {
    menu.classList.toggle('hide')
    menu.classList.toggle('show')
})
link3.addEventListener('click', function () {
    menu.classList.toggle('hide')
    menu.classList.toggle('show')
})
link4.addEventListener('click', function () {
    menu.classList.toggle('hide')
    menu.classList.toggle('show')
})
link5.addEventListener('click', function () {
    menu.classList.toggle('hide')
    menu.classList.toggle('show')
})