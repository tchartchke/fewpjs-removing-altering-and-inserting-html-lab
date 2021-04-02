let main = document.querySelector("main")
main.remove()


let newHeader = document.createElement('h1')

let idName = 'victory'
newHeader.id = idName

newHeader.innerHTML = "is the champion"

document.body.appendChild(newHeader)