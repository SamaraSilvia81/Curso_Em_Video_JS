const a = document.getElementById("area");
a.addEventListener('click',clicar);
a.addEventListener('mouseenter',entrar);
a.addEventListener('mouseout',sair);

function clicar(){
    a.innerText = 'Clicou!';
    a.style.background = "red";
}

function entrar(){
    a.innerText = 'Entrou!';
    a.style.background = "blue";
}

function sair(){
    a.innerText = 'Saiu!';
    a.style.background = "green";
}

//area.onclick = clicar;
//area.onmouseenter = entrar;
//area.onmouseout = sair;

