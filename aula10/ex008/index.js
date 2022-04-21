const somador = document.getElementById("btSomar");
const apagador = document.getElementById("btDeletar");
const tn1 = document.getElementById("txtn1"); // referência para o 1° input.
const tn2 = document.querySelector("input#txtn2");
const r = document.getElementById("res");

function somar(){

    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);

    tn1.value = " "; // Após ter sido executado a soma os inputs se limparão.
    tn2.value = " ";
    
    let resultado = n1 + n2;
    r.innerHTML = `A soma entre ${n1} + ${n2} é igual a <strong>${resultado}</strong>`;
}

function deletar(){
    r.innerHTML = " ";
}

btSomar.onclick = somar;
btDeletar.onclick = deletar;
