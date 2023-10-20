// Aqui Seta o Número Correto de Inputs
function num_jog(){
    
    window.num_jog = parseInt(document.getElementsByTagName("input")[0].value)
    for (i = 19 ; i > window.num_jog-1; i --){
        document.getElementsByClassName("lutadores")[0].getElementsByTagName("label")[i].innerHTML = ""
    }
}


// Aqui define os nomes aleatórios se o usuário quiser
function no_al(){
    defl_names = ['Spartacus', 'Comôdo', 'Flamma', 'Carpoporus', 'Secutor', 'Retiarius', 'Priscus', 'Verus', 'Tetraites', 'Prudentius', 'Hermes', 'Ganico', 'Crixus', 'Comodianos', 'Artemidorus', 'Asteropaeus', 'Rutuba', 'Diodorus', 'Achillia', 'Aenomao']
    for (i = 0; i < window.num_jog; i++){
        document.getElementsByClassName("lutadores")[0].getElementsByTagName("input")[i].value = defl_names[i]
    }
}


// Aqui Define os confrontos em uma array com 
function mashup(){
    comp_names = []
    for (i = 0; i < window.num_jog; i++){
        comp_names.push(document.getElementsByClassName("lutadores")[0].getElementsByTagName("input")[i].value)
    }
    
   // Primeira definição do Database para Tabela 
    window.compet = { 
        nomes: comp_names,
        vit: [],
        der: []
    }
    for (i = 0; i < comp_names.length; i++){
        window.compet.vit.push(0)
        window.compet.der.push(0)
    }

    //

    var confrontos = [];
    for (let i = 0; i < comp_names.length; i++) {
      for (let j = i + 1; j < comp_names.length; j++) {
        confrontos.push([comp_names[i], comp_names[j]]);
      }
    }    
    confr_al = confrontos
    for (let i = confr_al.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
  
      var temp = confr_al[i];
      confr_al[i] = confr_al[j];
      confr_al[j] = temp;
    }
      console.log(confr_al)
      window.confr_al = confr_al
  
}

function matches(){
    if (window.confr_al == window.null){
        window.confr_al = localStorage.getItem("confron")
    }
    embat = document.getElementsByClassName("column1")[0].innerHTML
    document.getElementsByClassName("luta")[0].remove()
    for (i = 0; i < window.confr_al.length; i++){
    if (i%2 == 0){
        document.getElementsByClassName("column1")[0].innerHTML += embat.replace("Nom0", window.confr_al[i][0]).replace("Nom1", window.confr_al[i][1]).replaceAll("vitoria_derrota", ("V_D"+ i))
    }
    else{
        document.getElementsByClassName("column2")[0].innerHTML += embat.replace("Nom0", window.confr_al[i][0]).replace("Nom1", window.confr_al[i][1]).replaceAll("vitoria_derrota", ("V_D"+ i))
    }
    }
} 

function results(){
    for(i = 0; i < window.confr_al.length; i++){
        sort = parseInt(Math.random()*2)
        document.getElementsByClassName("luta")[i].getElementsByTagName("input")[sort].checked = true
    }
}


function confirm(){
    window.cof = false
    if (window.confr_al == window.null){
        window.confr_al = JSON.parse(localStorage.getItem("confron"))
    }
    if (window.compet == window.null){
        compet = JSON.parse(localStorage.getItem("Competidores_Dados"))
    }
    sumula_geral = ""
    verr = 0

    for (i = 0; i < (window.confr_al.length *  2 ); i++){
    if (document.getElementsByClassName("lutas")[0].querySelectorAll("input")[i].checked == true ){    
     verr++
    }
}
    if (verr != window.confr_al.length){
        alert("Há Resultados Não Marcados, Por favor assinale todos para ver os resultados")
    }
    else {
    for (i = 0; i < (window.confr_al.length *  2 ); i++){
        index_lad = i % 2
        competidor_index = document.getElementsByClassName("lutas")[0].querySelectorAll("input")[i].name.replace("V_D", "")
         if (document.getElementsByClassName("lutas")[0].querySelectorAll("input")[i].checked == true ){    
                sumula_geral += " \nCombate de " + window.confr_al[competidor_index][0] + " Contra " + window.confr_al[competidor_index][1] + " - Vencedor Foi " + window.confr_al[competidor_index][1]
                compet.vit[compet.nomes.indexOf(window.confr_al[competidor_index][index_lad])] += 1
                console.log("V")
              }
         else if (document.getElementsByClassName("lutas")[0].querySelectorAll("input")[i].checked == false ){   
                compet.der[compet.nomes.indexOf(window.confr_al[competidor_index][index_lad])] += 1
                console.log("D")

    }
}
    }
  localStorage.setItem("confron", JSON.stringify(window.confr_al))
  localStorage.setItem("Competidores_Dados", JSON.stringify(compet)) 
  localStorage.setItem("sumula", sumula_geral)
  table_ajust()
}


function table_ajust(){
    if (document.getElementById("resultados").rows[1].innerHTML.indexOf("Cla") > -1){
    base_stats = document.getElementById("resultados").rows[1].innerHTML
    }
    else{
        base_stats = JSON.parse(localStorage.getItem("base"))
    }

    temp_size = document.getElementById("resultados").rows.length -1
    for (i = 0; i < temp_size; i++){
        document.getElementById("resultados").rows[1].remove()
    }

    compet = JSON.parse(localStorage.getItem("Competidores_Dados"))
    console.log(compet)
    for (i = 0; i < compet.nomes.length; i++){
        console.log(compet)
        document.getElementById("resultados").innerHTML += base_stats.replace("Cla", compet.nomes[i]).replace("win", compet.vit[i]).replace("los", compet.der[i])

    } 
    localStorage.setItem("base", JSON.stringify(base_stats))
    htmlContents = document.documentElement.innerHTML;
    localStorage.setItem('Save_P', JSON.stringify(htmlContents ));

}



function reset(){
    localStorage.clear();
    location.reload()
}









/* Define todos os confrontos
function criarConfrontos() {
    var lutadores = ["Spartacus", "Crixos", "Aenomaus", "Ganico"]
    var confrontos = [];
    for (let i = 0; i < lutadores.length; i++) {
      for (let j = i + 1; j < lutadores.length; j++) {
        confrontos.push([lutadores[i], lutadores[j]]);
      }
    }
  
    console.log(confrontos)
    
    confr_al = confrontos
    for (let i = confr_al.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
  
      var temp = confr_al[i];
      confr_al[i] = confr_al[j];
      confr_al[j] = temp;
    }
      console.log(confr_al)
    }

*/
