
export default function beats() {
    const main = document.createElement('main')
    main.classList.add("beats")
    content.appendChild(main)


    const item1 = document.createElement('div')
    const item2 = document.createElement('div')
    const item3 = document.createElement('div')
    const item4 = document.createElement('div')

    item1.classList.add("item", "ghost")
    item2.classList.add("item", "pokemon")
    item3.classList.add("item", "cup")
    item4.classList.add("item", "pizza")

    main.appendChild(item1)
    main.appendChild(item2)
    main.appendChild(item3)
    main.appendChild(item4)



}