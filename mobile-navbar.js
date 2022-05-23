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

//Adiciona e remove a classe da seção
//Matéria de Língua Portuguesa=====================================================================
function OpenCloseLP() {
    this.sectionLP.classList.toggle("OpenClose")
}

//Matéria de Matemática============================================================================
//Arranjo
function OpenCloseAJ() {
    this.sectionAJ.classList.toggle("OpenClose")
}
//Combinações
function OpenCloseCB() {
    this.sectionCB.classList.toggle("OpenClose")
}


//Matéria de Química===============================================================================
function OpenCloseQM() {
    this.sectionKW.classList.toggle("OpenClose")
}
