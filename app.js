const button = document.getElementById('button')
const nav = document.getElementById('nav')
let abierto = false
let footer = document.getElementById('footer-p')
footer.innerText = `©${new Date().getFullYear()} Todos los derechos reservados.`
const links = Array.from(document.getElementsByClassName('link-nav'))

links.forEach(link => {
    link.addEventListener('click', ()=>{
    
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
});


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