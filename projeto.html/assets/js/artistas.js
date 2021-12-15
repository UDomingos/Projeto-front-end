const section = document.querySelector ("section") ;
const button = document.querySelector("#meu-submit");

button.addEventListener("click",function(){
  
})
async function fetchData ( )  {
  const response = await fetch("http://meu-projeto-api.herokuapp.com/artistas") ;//modificar aplicação para servidor local
  const data = await response.json();

 data .forEach( (artistas) =>{
   const content = `<div class = "card">
       <img src= "${artistas.imagem}"alt="${artistas.nome}">
       <h2>${ artistas.nome} </h2>
       <p.${artistas.descricao} </p>
    </div> ` ;
section.innerHTML +=content;
  }) ;
} 

fetchData ( ) ;
