let  p1 = document.getElementsByTagName('p')[0];
document.write(`<br> Está escrito assim: ${p1.innerText}`);
p1.style.color = 'blue';

let corpo = document.body;
//corpo.style.backgroundColor = "aquamarine";

let  p2 = document.getElementsByTagName('p')[1];
document.write(`<br> Está escrito assim: ${p2.innerHTML}`);

const div = document.querySelector('div#msg');
div.style.color = 'blue';

/* const div = document.getElementById("msg");
document.write(`<br> A div é: ${div.innerText}`);
div.style.backgroundColor = "white";
*/

//div.innerText = "Mudei o conteúdo da div."
//document.getElementById("msg").innerText = 'Mudei o conteúdo da div.';

const div2 = document.getElementsByName("msg2")[0];
div2.innerText = 'Mudei a nova Div';

//const div3 = document.getElementsByClassName("msg3")[0];
//div3.innerText = 'Mudei a nova Div. De novo.';

const div3 = document.querySelector('div.msg3');
div3.style.color = 'red';















