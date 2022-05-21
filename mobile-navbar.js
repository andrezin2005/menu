function onScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll') 
    } else {
        navigation.classList.remove("scroll")
    }
}

function openMenu() {
    document.body.classList.add("menu-expanded")
}
function closeMenu() {
    document.body.classList.remove("menu-expanded")
}

const sectionIG = document.getElementsByClassName(".acordeonIG")
const sectionTK = document.getElementsByClassName(".acordeonTK")
const sectionKW = document.getElementsByClassName(".acordeonKW")

//Adiciona e remove a classe da seção
function OpenCloseIG() {
    this.sectionIG.classList.toggle("OpenClose")
}
function OpenCloseTK() {
    this.sectionTK.classList.toggle("OpenClose")
}
function OpenCloseKW() {
    this.sectionKW.classList.toggle("OpenClose")
}

//Remove a classe do link
function OpenIG() {
    this.sectionIG.classList.remove("OpenClose")
}
function OpenTK() {
    this.sectionTK.classList.remove("OpenClose")
}
function OpenKW() {
    this.sectionKW.classList.remove("OpenClose")
}
