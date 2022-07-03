import './style.css'
import home from './home'
import beats from './beat'
const content  = document.getElementById('content')

nav()
home()

const homeBtn = document.getElementById('homeBtn').addEventListener('click', () => {
    content.removeChild(document.nav);
    home() 
})

const beatsBtn = document.getElementById('beatsBtn').addEventListener('click', beats)




///
function nav() {
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    const h2 = document.createElement('h2')
     //nav//
     const h2Text = document.createTextNode('Myhzy Beats')
     h2.classList.add('nav-title')
     h2.appendChild(h2Text)
 
     ul.classList.add('nav-links')
 
     let homeLi = document.createElement('li')
     let beatsLi = document.createElement('li')
     let contactLi = document.createElement('li')
 
     const homeText = document.createTextNode('Home')
     const beatsText = document.createTextNode('Beats')
     const contactText = document.createTextNode('Contact')
 
     content.appendChild(nav)
     nav.appendChild(h2)
     nav.appendChild(ul)
 
     homeLi.appendChild(homeText)
     beatsLi.appendChild(beatsText)
     contactLi.appendChild(contactText)

     homeLi.setAttribute('id', 'homeBtn')
     beatsLi.setAttribute('id', 'beatsBtn')
     contactLi.setAttribute('id', 'contactBtn')
 
     ul.appendChild(homeLi)
     ul.appendChild(beatsLi)
     ul.appendChild(contactLi)

 // nav ends//
}

