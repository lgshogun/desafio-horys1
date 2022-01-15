// Resposta do Botão dos Contatos
function sendemail(){
    console.log("Hello World");
};

// Consumo da API ./api/data/web.json
function createNode(element) {
    return document.createElement(element);
};

function append(parent, el) {
  return parent.appendChild(el);
}

const aboutbox = document.getElementById('about');
const knowledgebox = document.getElementById('text-knowledges');

const url = 'http://localhost:8080/api/v1/web';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let contents = data.content.about
  return contents.map(function(content) {
    let p = createNode('p');
    let img = createNode('img');

    p.innerHTML = `${content.text}`;
    img.src = `${content.img}`;

    append(aboutbox, p);
    append(aboutbox, img);
    
  } )
})
.catch(function(error) {
  console.log(error);
});

