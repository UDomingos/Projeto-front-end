const section = document.querySelector("section");

async function fetchData(){
    const response = await fetch("http://localhost:8080/musicas");
const data = await response.json();

data.forEach( musicas => {
    const content = `<div class="card">
    <img src="${musicas.imagem}" width"150px">
    <h2>${musicas.titulo}</h2>
    <p>${musicas.ano}</h2>
    <p.${musicas.descricao}</p>
    </div>`;
    section.innerHTML += content;
    });
}

fetchData();