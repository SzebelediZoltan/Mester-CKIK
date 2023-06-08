passVis = document.querySelectorAll(".vis")[0]
jelInp = document.querySelectorAll(".jel-input")[0]

passVis.addEventListener("click", () => {
    if (jelInp.type == "password") {
        jelInp.type = "text"
        passVis.innerText = "visibility_off"
    } else {
        jelInp.type = "password"
        passVis.innerText = "visibility"
    }
})

belepes = document.querySelectorAll(".auth-belepes")[0]
whiteS = document.querySelectorAll(".white-screen")[0]
hiba = 0

belepes.addEventListener("click", () => {
    if (document.querySelectorAll(".fel-input")[0].value.length < 10){
        if (hiba == 0) {
            hiba = 1
            document.querySelectorAll(".felhasznalonev")[0].innerHTML += "<p class='piros'>Rövid felhsználónév</p>"
        }
    } else {
        whiteS.style.animation = "belepes 2s forwards"
    }
    // animation: belepes 2s forwards;
})