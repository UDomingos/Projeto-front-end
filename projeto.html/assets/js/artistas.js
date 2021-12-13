const section = document.querySelector ("section") ;

async function fetchData ( )  {
  const response = await fetch("https://meu-projeto-api.herokuapp.com/artistas") ;
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