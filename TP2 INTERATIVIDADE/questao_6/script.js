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