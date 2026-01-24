const button = document.getElementById('button')
const nav = document.getElementById('nav')
let abierto = false

button.addEventListener('click', ()=>{
    
    if (abierto === false){
        abierto = true
        nav.style.transform = 'translateY(0)'
        button.classList.remove('ic--twotone-menu')
        button.classList.add('mingcute--close-fill')
    } else {
        abierto = false
        nav.style.transform = 'translateY(-150%)'
        button.classList.remove('mingcute--close-fill')
        button.classList.add('ic--twotone-menu')
    }
})