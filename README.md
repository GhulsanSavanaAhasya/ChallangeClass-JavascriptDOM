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

element.style.color = "blue";
element.style.fontWeight = "bold";
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
// get first child element
let childPertama = document.getElementById("menu")
console.log(childPertama.firstElementChild)

// get last child element
let childTerakhir = document.getElementById("menu")
console.log(childTerakhir.lastElementChild)

// get all child elements
let semuaChild = document.getElementById("menu")
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