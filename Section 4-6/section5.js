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