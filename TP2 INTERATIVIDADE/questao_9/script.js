let lista = document.getElementById("minhaLista");

let itens = ["Item 1", "Item 2", "Item 3", "Item 4"];

itens.forEach(function (itemTexto) {
  let item = document.createElement("li");
  item.textContent = itemTexto;

  item.style.backgroundColor = "lightblue";
  item.style.color = "black";
  item.style.fontFamily = "Arial, sans-serif";
  item.style.border = "2px solid grey";
  item.style.padding = "10px";
  item.style.margin = "5px 0";

  lista.appendChild(item);
});


let primeiroParagrafo = document.getElementById("primeiro");
let segundoParagrafo = document.getElementById("segundo");

let heading = document.createElement("h2");
heading.textContent = "Internacional campeão da Libertadores 2025";
document.body.insertBefore(heading, segundoParagrafo);

let galeria = document.getElementById("galeria");
let imagens = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];

imagens.forEach(function (src) {
  let img = document.createElement("img");
  img.setAttribute("src", src);
  galeria.appendChild(img);
});

let primeiroItem = lista.firstElementChild;
if (primeiroItem) {
  lista.removeChild(primeiroItem);
}

if (primeiroParagrafo) {
  primeiroParagrafo.remove();
}

let novoItem = document.createElement("li");
novoItem.textContent = "Novo Item";
novoItem.style.backgroundColor = "lightgrey";
novoItem.style.color = "black ";
novoItem.style.fontFamily = "Arial, sans-serif";
novoItem.style.border = "2px solid black";
novoItem.style.padding = "10px";
novoItem.style.margin = "5px 0";

let ultimoItem = lista.lastElementChild;
if (ultimoItem) {
  lista.replaceChild(novoItem, ultimoItem);
}