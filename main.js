let name = prompt("Escribe tu nombre: ")
let divToAppend = document.getElementsByClassName("inner-cutout");
let divSelected = divToAppend[0];
let h1 = document.createElement("h1");
h1.className = "knockout";
let h1Text = document.createTextNode('Me encantas, ' + name + '!');
divSelected.appendChild(h1);
h1.appendChild(h1Text);

