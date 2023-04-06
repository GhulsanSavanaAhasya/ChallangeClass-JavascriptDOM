# ChallangeClass-JavascriptDOM

---

## Section 2
Section 2 - getElementById()

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
Section 3 - Get Child Elements

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
Section 4 - InnerHTML

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
Section 4-2 - CreateElement

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
Section 5 - setAttribute

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

---

## Section 6
Section 6 - Style

in section6.html
```
...
<h1 id="title">Selamat Datang Di Websiteku</h1>
<p id="paragraph">Perkenalkan nama saya Ghulsan Savana Ahasya.</p>
...
```

in section6.js
```
...
// ===================== Contoh 1 =================
// mengubah warna style h1 menjadi merah
let h1 = document.querySelector("#title")
h1.style.color = "red"

// ===================== Contoh 2 =================
// mengubah font style h1 menjadi miring
let p = document.querySelector("#paragraph")
p.style.fontWeight = "bold"
...
```
---
## Section 7
Section 7 - Events

in section7.html
```
...
    <div>
        <input type="text" name="username" id="username">
    </div>

    <div>
        <input type="number" name="number" id="number">
    </div>
...
```

in section7.js
```
...
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
...
```
---

## Section 8
Section 8 - Radio

in section8.html
```
...
        <h1>Makanan favoritmu</h1>

        <p>Pilih makanan kesukaanmu:</p>
        <div>
          <input type="radio" name="makanan" value="Rendang" id="rendang" />
          <label for="rendang">Rendang</label>
        </div>
        <div>
          <input type="radio" name="makanan" value="Ayam" id="ayam" />
          <label for="ayam">Ayam</label>
        </div>
        <div>
          <input type="radio" name="makanan" value="Telur" id="telur" />
          <label for="telur">Telur</label>
        </div>

        <p>
          <button id="btn">Show Selected Value</button>
        </p>

        <p id="output"></p>
...
```

in section8.js
```
...
// menampilkan teks yg dipilih jika tidak menampilkan kamu tidak memilih makanan kesukaanmu
const btn = document.querySelector("#btn");        
        const radioButtons = document.querySelectorAll("input[name='makanan']");
        btn.addEventListener("click", () => {
            let selectedMakanan;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedMakanan = radioButton.value;
                    break;
                }
            }
            // show the output:
            output.innerText = selectedMakanan ? `Kamu memilih ${selectedMakanan}` : `Kamu tidak memilih makanan kesukaanmu`;
        });
...
```
---