const form= document.querySelector("form");

form.addEventListener("submit",async(event)  =>{
    event.preventDefault();

const formData = new FormData(form);
const options ={method:"post",body:formData};

 const response = await fetch("http://meu-projeto-api.herokuapp.com/musicas",options );
console.log(response);
 if (response.ok){
    alert("Musica cadastrada com sucesso !");
history.go();
 }else{
alert("Erro ao cadastrar musica!");
 }
});
async function getartistas(){
    const response = await fetch(
        "https://meu-projeto-api.herokuapp.com/musicas"
    );
    const artistas = await response.json();
    artistas.forEach(element => {
        artistasselect.innerHtml +=`<option value="${artista.id}">${artista.nome}
        </opions`;
        
    });

    }
    getartistas();
