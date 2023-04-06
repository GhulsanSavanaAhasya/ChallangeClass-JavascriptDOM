# ChallangeClass-JavascriptDOM

---

## Section 2 
3 Contoh Dengan 1 Use Case

in section2.html
```
...
<p id="intro">Hallo nama saya Ghulsan Savana Ahasya</p>
...
```

in section2.js
```
...
const element = document.getElementById("intro");

// ===================== Contoh 1 =========================
element.style.color = "blue";
// ===================== Contoh 2 =========================
element.style.fontWeight = "bold";
// ===================== Contoh 3 =========================
element.style.textAlign = "center";
...
```

---

## section 3
3 Contoh Dengan 1 Use Case

in section3.html
```
...
    <ul id="menu">
        <li class="first">Ayam bakar</li>
        <li>Soto ayam</li>
        <li class="current">Ayam Sabana</li>
        <li>Bubur ayam</li>
        <li class="last">Sate ayam</li>
    </ul>
...
```

in section3.js
```
...
// ===================== Contoh 1 =========================
// mendapatkan elemen anak pertama
let childPertama = document.getElementById("menu")
console.log(childPertama.firstElementChild)

// ===================== Contoh 2 =========================
// mendapatkan elemen anak terakhir
let childTerakhir = document.getElementById("menu")
console.log(childTerakhir.lastElementChild)

// ===================== Contoh 3 =========================
// mendapatkan semua elemen anak
let allChild = document.getElementById("menu")
let child = menu.children
console.log(child)
...
```

--- 

## Section 4
3 Contoh Dengan 1 Use Case

in section4.html
```
...
<h1>Minuman favoritku!</h1>
    <ul id="minuman-favorit">
        <li>Fanta</li>
        <li>Es teh</li>
        <li>Cocacola</li>
        <li>Air putih</li>
    </ul>
...
```

in section4.js
```
...
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
...
```

---

## Section 4-2
3 Contoh Dengan 1 Use Case

in section4-2.html
```
...
<h1>Intro</h1>
    <p>Halo Namaku Ghulsan Savana Ahasya</p>

    <h2>Hobiku</h2>

    <ul id="menu">
        <li>Olahraga</li>
        <li>Membaca buku</li>
    </ul>
...
```

in section4-2.js
```
...
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
...
```
---

## Section 5
in section 5.html
```
...
<button id="submit">Submit</button>
...
```

in section5.js
```
...
//======================= Contoh 1 ===================
//membuat button disabled
let btnSubmit = document.querySelector("#submit")
if (btnSubmit){
    btnSubmit.setAttribute("disabled", "")
}

//======================= Contoh 2 ===================
// melakukan set value attribut name menjadi send
let btnClick = document.querySelector("#submit")
if (btnClick){
    btnClick.setAttribute("name", "send")
}
...
```