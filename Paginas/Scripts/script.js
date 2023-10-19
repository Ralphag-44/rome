function p_no(){
    num_p = document.getElementById("num_p").value 
    if (num_p > 20 || num_p < 2 || (num_p % 2) == 1 ){


    }
    else {
    document.getElementById("glad_n").innerHTML = ''
    for (i = num_p; i > 0; i--){
        document.getElementById("glad_n").innerHTML += '<tr><td><input type="text"></td></tr>'
    }
}
}
function auto_no(){
    defl_names = ['Spartacus', 'Comôdo', 'Flamma', 'Carpoporus', 'Secutor', 'Retiarius', 'Priscus', 'Verus', 'Tetraites', 'Prudentius', 'Hermes', 'Bato', 'Crixus', 'Comodianos', 'Artemidorus', 'Asteropaeus', 'Rutuba', 'Diodorus', 'Achillia', 'Aenomao']
    window.cont = document.getElementById("glad_n").rows.length
    document.getElementById("glad_n").innerHTML = ''
    for (i = 0; i < window.cont; i++){
        document.getElementById("glad_n").innerHTML += '<tr><td><input type="text" value='+ defl_names[i] +'></td></tr>'
    }

}

function mashup(){
window.cont = document.getElementById("glad_n").rows.length
window.play_list = []
rep = []

for (i = 0; i < window.cont; i++){
    pos = parseInt(Math.random()*window.cont)
    if (rep.indexOf(pos) < 0){
        window.play_list[pos] = (document.getElementById("glad_n").rows[i].cells[0].firstChild.value)
    rep.push(pos)
    }
    else {
     i--
    }
}    
corrt =  window.play_list
localStorage.setItem("jog_num", corrt);
}


function al(){
    play_list = localStorage.getItem("jog_num").split(",")
    console.log(play_list)
    embat = document.getElementById('arena').innerHTML
    document.getElementById('arena').innerHTML = ""

     for (i = ((play_list.length -1)/2), i2 = 0; i > 0; i--){
        document.getElementById('arena').innerHTML += embat.replace("Spartacus", play_list[i2]).replace("Julius Ceaser", (play_list[i2+1]))
        i2 +=2
     }

     // document.getElementById('combates').innerHTML = ''
    }
   

function verific(mud){
    n_duel = document.querySelectorAll("#vitoria-derrota").length
    res = localStorage.getItem("res_simp").split(" ,")
    for(i = 0; i < n_duel; i++){
    if (document.querySelectorAll("#vitoria-derrota")[i].value == document.querySelectorAll("#vitoria-derrota2")[i].value){
        if (res[i] == "V/D"){
            if (mud == "Vitoria"){

                document.querySelectorAll("#vitoria-derrota")[i].value = "Derrota"
                res[i] = "D/V"
            }
            else if (mud == "Derrota"){ 
 
                document.querySelectorAll("#vitoria-derrota2")[i].value = "Vitoria"
                res[i] = "D/V"
            }
        }
        else if  (res[i] == "D/V"){

            if (mud == "Vitoria"){
                document.querySelectorAll("#vitoria-derrota2")[i].value = "Vitória"
                res[i] = "V/D"
            }
            else if (mud == "Derrota"){    

                document.querySelectorAll("#vitoria-derrota")[i].value = "Derrota"
                res[i] = "V/D"
            }
        }

    }
    }
   res = res.join(" ,")
   localStorage.getItem("res_simp", res)
}

function rand(){
    


    res_s = ""
    n_duel = document.querySelectorAll("#vitoria-derrota").length
    for(i = 0; i < n_duel; i++){
        r  = parseInt(Math.random()*2)
        if (r==0){
        document.querySelectorAll("#vitoria-derrota")[i].value = "Derrota"
        document.querySelectorAll("#vitoria-derrota2")[i].value = "Vitoria"
        res_s += "D/V ,"
        }
        else if (r==1){
        document.querySelectorAll("#vitoria-derrota")[i].value = "Vitoria"
        document.querySelectorAll("#vitoria-derrota2")[i].value = "Derrota"
        res_s += "V/D ,"
        }
    }
    console.log(res_s)
    localStorage.setItem("res_simp", res_s)
}
