const passVis = document.querySelectorAll(".vis")
const jelInp = document.querySelectorAll(".jel-input")

passVis.forEach(passVisF)

function passVisF(item, index) {
    passVis[index].addEventListener("click", () => {
        if (jelInp[index].type == "password") {
            jelInp[index].type = "text"
            passVis[index].innerText = "visibility_off"
        } else {
            jelInp[index].type = "password"
            passVis[index].innerText = "visibility"
        }
    })
}

const belepes = document.querySelectorAll(".auth-belepes")[0]
const whiteS = document.querySelectorAll(".white-screen")[0]
let hiba = 0

belepes.addEventListener("click", () => {
    whiteS.style.animation = "belepes 2s forwards"
    setTimeout(() => {
        document.location.href = "./asd.html";
    }, 2000)
})

const regisztracio = document.querySelectorAll(".auth-regisztracio")[0]
const elfelejtett = document.querySelectorAll(".elfelejtett")[0]
const authInputs = document.querySelectorAll(".auth-inputs")[0]
const authBtns = document.querySelectorAll(".auth-btns")[0]
const jelszou = document.querySelectorAll(".jelszou")[0]
const logo = document.querySelectorAll(".auth-logo")[0]
const sikeres = document.querySelectorAll(".sikeres")[0]
const maina = document.querySelectorAll(".auth-main")[0]

regisztracio.addEventListener("click", () => {
    elfelejtett.style.position = "absolute"
    elfelejtett.style.opacity = "0"
    elfelejtett.style.pointerEvents = "none"
    jelszou.style.position = "static"
    jelszou.style.animation = "becsuszas 1s forwards"
    belepes.style.display = "none"
    belepes.style.position = "absolute"
    regisztracio.style.border = "solid 3px var(--elsodleges)"
    regisztracio.style.backgroundColor = "var(--elsodleges)"
    regisztracio.style.color = "black"
    regisztracio.addEventListener("click", () => {
        sikeres.style.opacity = "1"
        logo.style.animation = "logocsusztatas 0.7s forwards"
        authInputs.style.opacity = "0"
        authInputs.style.pointerEvents = "None"
        authBtns.style.opacity = "0"
        authBtns.style.pointerEvents = "None"
        maina.style.boxShadow = "rgba(var(--zold-asd), 0.75) 0px 0px 30px"
    })
})

