const typeIs = require("type-is");

// Resposta do Botão dos Contatos
function sendemail(){
    console.log("Hello World");
};

// Consumo da API ./api-db/
function createNode(element) {
    return document.createElement(element);
};

function append(parent, el)  {
  return parent.appendChild(el);
}

const aboutbox = document.getElementById('about');
const imgdelete = document.getElementById('imgdelete');
const url = 'http://localhost:3300/content';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let contents = data
  return contents.map(function(content) {
    let p = createNode('p');
    let img = createNode('img');

    p.innerHTML = `${content.knw}`;
    img.src = `${content.avatar}`;

    append(aboutbox, p);
    append(aboutbox, img);
  } )
})
.catch(function(error) {
  console.log(error);
});

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let contents = data
  return contents.map(function(content) {

    imgdelete.innerHTML = `${content.languages}`;
  } )
})
.catch(function(error) {
  console.log(error);
});


if (password.length == 4) {
  return password.filter(function (v) {
    return typeof v == 'number'
  });
}