const inputNumber = document.getElementById("txtvel")
const btVerificar = document.getElementById("verifica")
const btLimpar = document.getElementById("limpar")
const res = document.querySelector("div#res")

function calcular(){

    vel = Number(inputNumber.value)

    inputNumber.value = " " // Após ter sido executado a soma os inputs se limparão.

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h<strong></p>`
    
    if(vel>60){
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade</p>`
    }
    
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}

function remove(){
    res.innerHTML = " ";
}

verifica.onclick = calcular
limpar.onclick = remove