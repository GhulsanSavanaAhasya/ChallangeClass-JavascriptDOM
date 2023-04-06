// ============== Contoh 1 ===================
// membuat input menjadi focus ketika di klik
const focus = document.getElementById("username")
focus.addEventListener("focus", (event) => {
    event.target.value = "Keren"
})

// ============== Contoh 2 ===================
// membuat input menjadi berubah warna tulisan ketika di klik
const blur = document.getElementById("number")
blur.addEventListener("blur", (event) => {
    event.target.style.color = "red"
})