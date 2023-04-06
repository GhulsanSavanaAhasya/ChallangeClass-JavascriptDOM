// ======================== Contoh 1 ========================
// membuat element baru div
let div = document.createElement("div")
div.id = "container-hobi"
div.innerHTML = "<p>ini adalah div</p>"
document.body.appendChild(div)

// ======================== Contoh 2 ========================
// membuat element baru p
let paragraf = document.createElement("p")
paragraf.innerHTML = "<p>diantara hobiku tersebut aku paling senang bermain game.</p>"
document.body.appendChild(paragraf)

// ======================== Contoh 3 ========================
// membuat list item baru
let list = document.createElement("li")
list.textContent = "Bermain game"
menu.appendChild(list)
