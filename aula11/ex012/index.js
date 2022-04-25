const inputNacional = document.querySelector("input#txtN").value.toLoweCase();
const btVerificar = document.getElementById("verifica")
const btLimpar = document.getElementById("limpar")
const res = document.querySelector("div#res")

function analise(){

    nacional = inputNacional.value;

    inputNacional.value = " " // Após ter sido executado a soma os inputs se limparão.
    
    if(nacional == "Brasil"){
        res.innerHTML += `<p>Você é <strong>Brasileiro</strong></p>`
    } else{
        res.innerHTML += `<p>Você é <strong>Estrangeiro</strong></p>`
    }

}

function remove(){
    res.innerHTML = " ";
}

verifica.onclick = analise
limpar.onclick = remove