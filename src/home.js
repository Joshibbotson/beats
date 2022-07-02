function home() {
    content = document.getElementById('content')
    nav = document.createElement('nav')
    header = document.createElement('header')
    main = document.createElement('main')
    div = document.createElement('div')
    li = document.createElement('li')
    ul = document.createElement('ul')
    h2 = document.createElement('h2')
    liHTML = document.getElementsByTagName('li')

    function newli() {
        return document.createElement('li')
    
    }

    const h2Text = document.createTextNode('Myhzy Beats')
    h2.classList.add('nav-title')
    h2.appendChild(h2Text)

    homeDomElement.ul.classList.add('nav-links')

    homeText = document.createTextNode('Home')
    beatsText = document.createTextNode('Beats')
    contactText = document.createTextNode('Contact')

    content.appendChild(nav)
    nav.appendChild(h2)
    nav.appendChild(ul)
    ul.appendChild(newli().appendChild(homeText))
    ul.appendChild(newli().appendChild(beatsText))
    



}

export default home
