// const { off } = require("node-notifier")

let navs = document.querySelectorAll(".navigation__item")
let track = document.querySelector('.navigation__tracking-item')

let offset = 0;
let mainSlider = document.querySelector('.main')

navs.forEach(val => {
    val.addEventListener('click', function(){  
        navs.forEach(val => val.classList.remove('active'))
        this.classList.add('active')      
        switch(this.id){
            case 'nav1':
                s = "display: block; transform: rotate(321deg);"
                track.setAttribute("style", s)
                mainSlider.style.top = 0 + "vh"
                break
            case 'nav2':
                s = 'display: block; transform: rotate(305deg);'
                track.setAttribute('style', s)
                mainSlider.style.top = -100 + "vh"
                break
            case 'nav3':
                s = 'display: block; transform: rotate(292deg);'
                track.setAttribute('style', s)
                mainSlider.style.top = -200 + "vh"
                break
            case 'nav4':
                s = 'display: block; transform: rotate(280deg);'
                track.setAttribute('style', s)
                mainSlider.style.top = -300 + "vh"
                break
            case 'nav5':
                s = 'display: block; transform: rotate(268.5deg);'
                track.setAttribute('style', s)
                mainSlider.style.top = -400 + "vh"
                break
            case 'nav6':
                s = 'display: block; transform: rotate(257deg);'
                track.setAttribute('style', s)
                mainSlider.style.top = -500 + "vh"
                break
            case 'nav7':
                s = 'display: block; transform: rotate(245deg);'
                track.setAttribute('style', s)
                mainSlider.style.top = -600 + "vh"
                break
            case 'nav8':
                s = 'display: block; transform: rotate(232deg);'
                track.setAttribute('style', s)
                mainSlider.style.top = -700 + "vh"
                break
            case 'nav9':
                s = 'display: block; transform: rotate(216deg);'
                track.setAttribute('style', s)
                mainSlider.style.top = -800 + "vh"
                break
        }
    })
})

let block_cat = document.querySelector('.category__content-search')
let block_grad = document.querySelector('.content-search__grad')
if( block_grad ){
    block_cat.addEventListener('mouseover', function() {
        block_grad.style.display = 'none'
    })
}
