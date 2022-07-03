import './style.css'
import home from './home'
import beats from './beat'
import contact from './contact'

const content  = document.getElementById('content')

nav()
home()

let homeActive = true
let beatsActive = false
let contactActive = false

function switcher() {
    content.innerHTML = ''
    switch(homeActive){
        case true: nav()
        home()

        break;
        case false:
    }
    switch(beatsActive){
        case true: nav()
        beats()
        
        break;
        case false:
    }
    switch(contactActive){
        case true:  nav()
        contact()

        break;
        case false:
    }
}

function nav() {
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    const h2 = document.createElement('h2')
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
     const homeBtn = document.getElementById('homeBtn').addEventListener('click', (e) => {
        // e.target.classList.add("active")
        homeActive = true;  
        beatsActive = false;
        contactActive = false;
        switcher()
    })
    
    const beatsBtn = document.getElementById('beatsBtn').addEventListener('click', (e) => {
        homeActive = false;  
        beatsActive = true;
        contactActive = false;

        switcher()
    })
    const contactBtn = document.getElementById('contactBtn').addEventListener('click', (e) => {
        homeActive = false;  
        beatsActive = false;
        contactActive = true;

        switcher()
    })
}

