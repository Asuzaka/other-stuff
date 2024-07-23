let movers = document.querySelector('#movers')
let scrollCard = document.querySelector('#scroll')
let Overlay = document.getElementById('overlay')
let switchBtn = document.querySelector('.hamb-btn')
let HCloseBtn = document.querySelector('#h-close-btn')
let view = window.matchMedia("(max-width: 414px)")

function myFunction(x) {
    if (x.matches) {

        document.body.classList.add('mobile-font')
    } else {
        document.body.classList.remove('mobile-font')
    }
}
alert(window.outerWidth)
myFunction(view)
function OpenMenu() {
    document.querySelector('.hamburger').classList.remove('d-none')
    Overlay.classList.remove('d-none')
}

function CloseMenu() {
    document.querySelector('.hamburger').classList.add('d-none')
    Overlay.classList.add('d-none')
}

switchBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    OpenMenu()
})
HCloseBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    CloseMenu()
})

Overlay.addEventListener('mouseup', (e) => {
    e.stopPropagation()
    CloseMenu()
})




// Scroll
movers.children[0].addEventListener('click', (e) => {
    e.stopPropagation()
    scrollCard.scrollLeft -= 1200;
})

movers.children[1].addEventListener('click', (e) => {
    e.stopPropagation()
    scrollCard.scrollLeft += 1200;
})