
for(i of document.querySelectorAll('[search]')){
    try{
        busca(i,document.querySelector("#"+i.getAttribute('search')))
    }catch(e){}
}


function busca(input_field,div){
    input_field.onkeyup=function(e){
        for(di of div.children){
            input = document.getElementById("Search");
            r  = new RegExp(input.value.toLowerCase(),"g")
            //if(di.getAttribute("nome").toLowerCase().match(r) != null)
            if(di.getAttribute("nome").match(r) != null)
                di.style.removeProperty('display')
            else
                di.style.display = "none"
        }
    }
}
function buscaMT(input_field,div){
    input_field.onkeyup=function(e){
        for(di of div.children){
            input = document.getElementById("SearchMT");
            r  = new RegExp(input.value.toLowerCase(),"g")
            //if(di.getAttribute("nome").toLowerCase().match(r) != null)
            if(di.getAttribute("nome").match(r) != null)
                di.style.removeProperty('display')
            else
                di.style.display = "none"
        }
    }
}
function buscaEPL(input_field,div){
    input_field.onkeyup=function(e){
        for(di of div.children){
            input = document.getElementById("SearchEPL");
            r  = new RegExp(input.value.toLowerCase(),"g")
            //if(di.getAttribute("nome").toLowerCase().match(r) != null)
            if(di.getAttribute("nome").match(r) != null)
                di.style.removeProperty('display')
            else
                di.style.display = "none"
        }
    }
}
function buscaFS(input_field,div){
    input_field.onkeyup=function(e){
        for(di of div.children){
            input = document.getElementById("SearchFS");
            r  = new RegExp(input.value.toLowerCase(),"g")
            //if(di.getAttribute("nome").toLowerCase().match(r) != null)
            if(di.getAttribute("nome").match(r) != null)
                di.style.removeProperty('display')
            else
                di.style.display = "none"
        }
    }
}
function buscaQM(input_field,div){
    input_field.onkeyup=function(e){
        for(di of div.children){
            input = document.getElementById("SearchQM");
            r  = new RegExp(input.value.toLowerCase(),"g")
            //if(di.getAttribute("nome").toLowerCase().match(r) != null)
            if(di.getAttribute("nome").match(r) != null)
                di.style.removeProperty('display')
            else
                di.style.display = "none"
        }
    }
}
function buscaPT(input_field,div){
    input_field.onkeyup=function(e){
        for(di of div.children){
            input = document.getElementById("SearchPT");
            r  = new RegExp(input.value.toLowerCase(),"g")
            //if(di.getAttribute("nome").toLowerCase().match(r) != null)
            if(di.getAttribute("nome").match(r) != null)
                di.style.removeProperty('display')
            else
                di.style.display = "none"
        }
    }
}
function buscaPT(input_field,div){
    input_field.onkeyup=function(e){
        for(di of div.children){
            input = document.getElementById("SearchBG");
            r  = new RegExp(input.value.toLowerCase(),"g")
            //if(di.getAttribute("nome").toLowerCase().match(r) != null)
            if(di.getAttribute("nome").match(r) != null)
                di.style.removeProperty('display')
            else
                di.style.display = "none"
        }
    }
}
function buscaPT(input_field,div){
    input_field.onkeyup=function(e){
        for(di of div.children){
            input = document.getElementById("SearchHT");
            r  = new RegExp(input.value.toLowerCase(),"g")
            //if(di.getAttribute("nome").toLowerCase().match(r) != null)
            if(di.getAttribute("nome").match(r) != null)
                di.style.removeProperty('display')
            else
                di.style.display = "none"
        }
    }
}
