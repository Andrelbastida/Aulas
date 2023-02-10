/* FORMAS DE BUSCAS*/

/*  - Por marca (tag HTML).
var p = window.document.getElementsByTagName('p')[1]
window.document.write(p.innerText)
*/

 /*- Por Id 
var p = window.document.getElementById('p1')
window.document.write(p.innerHTML)
*/

/* Por Seletor (Class ".")------------| ↓
var p = window.document.querySelector('p.p1')
window.document.write(p.innerText)

Por Seletor (ID "#")------------------| ↓
var p = window.document.querySelector('p#p1')
window.document.write(p.innerText)
*/

    var box = window.document.getElementById("click")
    box.addEventListener("mouseenter",entrar)
    box.addEventListener("mouseout",sair)
    box.addEventListener("click",clicar)
   

function entrar(){
    
    box.style.background="yellow"
}
function sair(){
    
    box.style.background="green"
}

function clicar(){
    box.innerText="Clicou!"
}

