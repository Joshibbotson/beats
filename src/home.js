function home() {
    const content = document.getElementById('content')
    const header = document.createElement('header')
    const main = document.createElement('main')
 
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


    const iframe = document.createElement('iframe');
    iframe.src = "https://www.youtube.com/embed/9HlA_0L8uLA"
    iframe.classList.add("iframe-home")
    iframe.title = "Drake Fans Arn't Happy About This..."
    main.appendChild(iframe)



}

export default home
