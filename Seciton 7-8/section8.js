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