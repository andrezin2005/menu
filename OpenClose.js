//Adiciona e remove a classe da seção
//Matéria de Língua Portuguesa=====================================================================
function OpenCloseLP() {
    this.sectionLP.classList.toggle("OpenClose")
}
//Matéria de Redação================================================================================
function OpenCloseRD() {
    this.sectionRD.classList.toggle("OpenClose")
    this.sectionIT.classList.add("OpenClose")
    this.sectionDS.classList.add("OpenClose")
    this.sectionCL.classList.add("OpenClose")
}
//Introdução
function OpenCloseIT() {
    this.sectionIT.classList.toggle("OpenClose")
}
//Desenvolvimento
function OpenCloseDS() {
    this.sectionDS.classList.toggle("OpenClose")
}
//Conclusão
function OpenCloseCL() {
    this.sectionCL.classList.toggle("OpenClose")
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
//Progressão Aritimética
function OpenClosePA() {
    this.sectionPA.classList.toggle("OpenClose")
}
//Progressão geométrica
function OpenClosePG() {
    this.sectionPG.classList.toggle("OpenClose")
}


//Matéria de Química===============================================================================
function OpenCloseQM() {
    this.sectionKW.classList.toggle("OpenClose")
}

//Matéria de Espanhol==============================================================================
//Técnicas de leitura   
function OpenCloseTCL() {
    this.sectionTCL.classList.toggle("OpenClose")
}
//Matéria de Física================================================================================
//Eletrostática
function OpenCloseELT() {
    this.sectionELT.classList.toggle("OpenClose")
}
