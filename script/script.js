function sendemail(){
    console.log("Hello World")
}



function getcontent(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function createText(content) {
    h3 = document.createElement("h3");
    p = document.createElement("p");
    h3.innerHTML = content.title;
    p.innerHTML = content.text;

    text.appendChild(h3);
    text.appendChild(p);
    
    return text;
}

function main(){
    let data = (getcontent("doc.json"));
    let content = JSON.parse(data);
    let aboutbox = document.getElementById("home-about");

    content.forEach(element => {
        let text = createText(element);
        aboutbox.appendChild(text);
    });
}

main();