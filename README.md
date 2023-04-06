# ChallangeClass-JavascriptDOM

---

## Section 2 
1 Use Case Dengan 3 Contoh

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
1 Use Case Dengan 3 Contoh

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