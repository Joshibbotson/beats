function home() {
    const content = document.getElementById('content')
    const nav = document.createElement('nav')
    const header = document.createElement('header')
    const main = document.createElement('main')
    const div = document.createElement('div')
    const li = document.createElement('li')
    const ul = document.createElement('ul')
    const h2 = document.createElement('h2')
    const liHTML = document.getElementsByTagName('li')

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

    ul.appendChild(homeLi)
    ul.appendChild(beatsLi)
    ul.appendChild(contactLi)
    



}

export default home
