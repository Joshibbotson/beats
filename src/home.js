function home() {
    const content = document.getElementById('content')
    const nav = document.createElement('nav')
    const header = document.createElement('header')
    const main = document.createElement('main')
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

    ul.appendChild(homeLi)
    ul.appendChild(beatsLi)
    ul.appendChild(contactLi)
// nav ends//
//header//
    content.appendChild(header)

    const profileImage = document.createElement('div')
    const textContainer = document.createElement('div')
    const h2Element = document.createElement('h1')
    const pElement = document.createElement('p')

    const headerH2Text = document.createTextNode("Hip Hopper, Go Getter")
    const headerPText = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id non molestiae temporibus molestias laudantium, dignissimos dicta officia ex minus culpa, expedita, architecto ratione provident cum! Sapiente, perferendis quibusdam tenetur eveniet repudiandae beatae omnis veritatis porro consequatur rem explicabo qui corporis exercitationem! Voluptate, suscipit architecto temporibus doloremque in optio quas facilis!")

    h2Element.appendChild(headerH2Text)
    h2Element.classList.add('h1-header')
    pElement.appendChild(headerPText)

    textContainer.classList.add('text-container')
    textContainer.append(h2Element)
    textContainer.append(pElement)

    header.appendChild(profileImage)
    profileImage.classList.add('profile-image')

    header.appendChild(textContainer)
    //header ends
    //main..
    content.appendChild(main)

    function itemCreation (amount, cssClass) {
        let arr = []
        for (let i = 0; i <= amount; i++) {
            const div = document.createElement('div')
            div.classList.add(cssClass)
            arr.push(div)
            main.appendChild(arr[i])
        }
        console.log(arr)
    }
    itemCreation(3, "item")


}

export default home
