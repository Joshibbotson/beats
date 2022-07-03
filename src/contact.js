export default function contact() {
    const main = document.createElement('main')
    content.appendChild(main)
    
    const form = document.createElement('form')
    form.action = "#0"
    form.onsubmit = "validate(event)"

    

    const columnDivName = document.createElement('div')
    columnDivName.classList.add("column-div")

    const nameLabel = document.createElement("label")
    const name = document.createElement("input")
    name.type = "text"
    name.name = "name"
    nameLabel.innerHTML = "NAME"
    columnDivName.appendChild(nameLabel)
    columnDivName.appendChild(name)
    form.appendChild(columnDivName)
    

    const columnDivEmail = document.createElement('div')
    columnDivEmail.classList.add("column-div")

    const emailLabel = document.createElement('label')
    const email = document.createElement("input")
    email.type = "email"
    email.name = "email"
    emailLabel.innerHTML = "EMAIL"
    columnDivEmail.appendChild(emailLabel)
    columnDivEmail.appendChild(email)
    form.appendChild(columnDivEmail)


    const columnDivTextbox = document.createElement('div')
    columnDivTextbox.classList.add("column-div")

    const textareaLabel = document.createElement("label")
    const textarea = document.createElement("textarea")
    textarea.name = "text"
    textarea.innerHTML = "Enter text here..."
    textareaLabel.innerHTML = "Get in touch!"
    columnDivTextbox.appendChild(textareaLabel)
    columnDivTextbox.appendChild(textarea)
    form.appendChild(columnDivTextbox)


    const submitBtn = document.createElement("button")

    submitBtn.type = "submit"
    submitBtn.innerHTML = "Submit"
    form.appendChild(submitBtn)

    main.appendChild(form)

}