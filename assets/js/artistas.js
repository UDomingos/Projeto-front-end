const section = document.querySelector("section");
const input = document.querySelector("input")

async function fetchData(){
    const response = await fetch("https://meu-projeto-api.herokuapp.com/artistas");
const data = await response.json();
const artistas = [
  {nome:"Anita",genero:"Funk"},
  {nome:"Marilia Mendonca",genero:"sertanejo"},
  {nome:"Iza",genero:"Pop"},
  {nome:"Ivete Sangalo",genero:"Reggae/Pop"},
]
input.addEventListener("keyup",function(){
  const fitrados = artistas.filter(function(artista){
    return artista.genero.toLowerCase().includes(input.value.toLowerCase())

  });
},
fetchData(),
async function fetchData(){
  data.forEach(function (artistas) {
    const content = `<div class="card">
    <img src="${artistas.imagem}"alt="${artistas.nome}">
    <h2>${artistas.nome}</h2>
    <p.${artistas.descricao}</p>
    </div>`;
    section.innerHTML += content;
  });
});


}
  
  