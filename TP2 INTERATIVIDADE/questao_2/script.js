document.getElementById("button").addEventListener("click", () => {
  let texto = document.createElement("p");
  texto.innerHTML = "Internacional Campeão da Libertadores 2025";
  texto.style.backgroundColor = "yellow";
  texto.style.color = "blue";

  document.body.appendChild(texto);
});
