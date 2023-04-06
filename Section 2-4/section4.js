// ================ Contoh 1 =======================
// menampilkan isi list
let contoh1 = document.getElementById("minuman-favorit")
console.log(contoh1.innerHTML)

// ================ Contoh 2 ========================
// menambahkan list baru
let contoh2 = document.getElementById("minuman-favorit")
let list = document.createElement("li")
list.textContent = "Es jeruk"
// masukkan kedala element ul
contoh2.appendChild(list)

console.log(contoh2.innerHTML)

// ================ Contoh 3 ========================
let contoh3 = document.getElementById("minuman-favorit")
// menghilangkan semua list
contoh3.innerHTML = ""