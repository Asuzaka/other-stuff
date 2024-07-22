let movers = document.querySelector('#movers')
let scrollCard = document.querySelector('#scroll')

movers.children[0].addEventListener('click', (e) => {
    e.stopPropagation()
    scrollCard.scrollLeft -= 1200;
})

movers.children[1].addEventListener('click', (e) => {
    e.stopPropagation()
    scrollCard.scrollLeft += 1200;
})