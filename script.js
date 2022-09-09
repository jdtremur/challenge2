const Texts = document.querySelector("#text");
const inputAdd = document.querySelector("#buttonAdd");

function addSentences(){
    var dato = Texts.value;
    var datos=[];
    datos.push(dato);
    console.log(datos);
}


inputAdd.onclick = addSentences;
