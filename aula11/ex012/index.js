const inputNacional = document.querySelector("input#txtN")
const btVerificar = document.getElementById("verifica")
const btLimpar = document.getElementById("limpar")
const res = document.querySelector("div#res")

function analise(){

    let nacional = inputNacional.value

    inputNacional.value = " " // Após ter sido executado a análise os inputs se limparão.
    
    res.innerHTML = `<p>Você está vivendo no(a) <strong>${nacional}<strong>.</p>`

    if(nacional == "Brasil"){
        res.innerHTML += `<p>Você é <strong>Brasileiro</strong>.</p>`
    } else{
        res.innerHTML += `<p>Você é <strong>Estrangeiro</strong>.</p>`
    }

}

function remove(){
    res.innerHTML = " "
}

verifica.onclick = analise
limpar.onclick = remove