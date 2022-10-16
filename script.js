const words = ['HTML','programar','java','boton','canvas','cristian','codificar','fuente','documento'];
const addWord = document.getElementById('addWord');
const usedlettersElement = document.getElementById('usedLetters')
const Texts = document.querySelector("#text");
const textsIngrese = document.querySelector('#buttonAdd');

let selectWord;
let usedletters;
let mistake;
let hits;

function addSentenses(){
    let sentensesWrite = Texts.value;
    let sentenses = sentensesWrite.toUpperCase();
    console.log(sentenses);
    var ms;
    var opcion = confirm("Has agregado la palabra: " + sentenses);
    if(opcion == true){
        alert("Se agregó la palabra "+sentenses+" correctamente");
        words.push(sentenses);
        console.log(words);
    }
    else{
        alert("No se ha agregado la palabra");
        Texts.value="";
        Texts.focus();
    }
    Texts.value="";
}

textsIngrese.onclick = addSentenses;

const selectRandomWord = () =>{
    let word = words[Math.floor((Math.random() * words.length))].toUpperCase();
    selectWord = word.split('');
    console.log(selectWord);
}

const drawWord = () =>{
    selectWord.forEach(letter => {
        const letterElement=document.createElement('span');
        letterElement.innerHTML=letter.toUpperCase();
        letterElement.classList.add('letter');
        letterElement.classList.add('hidden');
        addWord.appendChild(letterElement);
    });
}

const correctLetter = letter =>{
    const {children}= addWord;
    for(let i=0; i < children.length; i++){
        if (children[i].innerHTML === letter) {
            children[i].classList.toggle('hidden');
            hits++;
        }

    }
    if(hits===selectWord.length)goodGame();
}
const letterEvent = Event =>{
    let newLetter = Event.key.toUpperCase();
    if(newLetter.match(/^[a-zñ]$/i) && !usedletters.includes(newLetter)){
        letterInput(newLetter);
    }
}
const letterInput = letter =>{
    if(selectWord.includes(letter)){
        correctLetter(letter)
    }
    else{
        wrongLetter();
    }
    addLetter(letter);
    usedletters.push(letter);
}
const addLetter = letter =>{
    const letterElement = document.createElement('span');
    letterElement.innerHTML=letter.toUpperCase();
    usedlettersElement.appendChild(letterElement);
}

const wrongLetter = () =>{
    mistake++;
    if(mistake===selectWord.length)endGame();
}

const endGame = () =>{
    document.removeEventListener('keydown', letterEvent);
    document.getElementById("buttons2").style.display="none";
    document.getElementById("buttons3").style.display="block";
    line(195,280,205,280,205,323,195,323);//plataforma izq abajo//
    line(290,280,300,280,300,323,290,323);//plataforma der abajo//
    line(250,40,245,40,245,150,250,150);//cuerda de horca//
    paintBrush.clearRect(205,270,86,10);
    
}
const goodGame = () =>{
    document.removeEventListener('keydown', letterEvent)
    document.getElementById("buttons2").style.display="none";
    document.getElementById("buttons4").style.display="block";
}

var screen = document.querySelector("canvas");
var paintBrush = screen.getContext("2d");
paintBrush.fillRect(0,0,400,400);
var color = "";

function circle(x,y,radio){
    paintBrush.fillStyle="white";
    paintBrush.beginPath();
	paintBrush.arc(x,y,radio,0,2*Math.PI);
	paintBrush.fill();
}

function line(x,y,a,b,c,d,e,f) {
    paintBrush.fillStyle="white";
    paintBrush.moveTo(x,y);
    paintBrush.lineTo(a,b);
    paintBrush.lineTo(c,d);
    paintBrush.lineTo(e,f);
	paintBrush.fill()
}

function drawtoy(){
    line(50,380,70,380,70,20,50,20);//barra ver... de la horca//
    line(70,20,70,40,250,40,250,20);//barra hor... de la horca//
    line(40,380,80,380,80,370,40,370);//soporte de la horca//
    line(243,190,252,190,252,250,243,250);//dorso del muñeco//
    line(243,220,243,215,223,225,223,230);//mano izquierda//
    line(252,220,252,215,272,225,272,230);//mano derecha//
    line(243,250,247.5,250,230,270,210,270);//pierna izquierda//
    line(252,250,247.5,250,265,270,285,270);//pierna derecha//
    line(195,270,170,270,170,280,195,280);//plataforma izquierda//
    line(170,270,160,270,160,380,170,380);//soport izq plataforma//
    line(300,270,325,270,325,280,300,280);//plataforma derecha//
    line(325,270,335,270,335,380,325,380);//soport der plataforma//
    line(110,380,160,380,160,360,110,360);//escalon 1//
    line(120,360,160,360,160,340,120,340);//escalon 2//
    line(130,340,160,340,160,320,130,320);//escalon 3//
    line(140,320,160,320,160,300,140,300);//escalon 4//
    line(150,300,160,300,160,280,150,280);//escalon 5//
    circle(295,275,5);//bisagra derecha//
    circle(200,275,5);//bisagra izquierda//
    circle(247.5,170,20);//cabeza//
}
 

const Init = document.querySelector(".button1");
const Add = document.querySelector(".button2");
const initialLausher = document.querySelector(".button4");
const noGrafic_and_lausherInitial = document.querySelector(".button8");
const noGameOver_and_Grafic = document.querySelector(".button6");
const noGoodGame_and_Grafic = document.querySelector(".button7");

function lausherText(){
    document.getElementById("buttons").style.display="none";
    document.getElementById("addText").style.display="block";
}
function goLausher(){
    document.getElementById("buttons").style.display="block";
    document.getElementById("addText").style.display="none";
    document.getElementById("Grafic").style.display="none";
}
function noLausher(){
    document.getElementById("buttons").style.display="none";
    document.getElementById("Grafic").style.display="block";
    document.getElementById("buttons3").style.display="none";
    document.getElementById("buttons4").style.display="none";
    document.getElementById("buttons2").style.display="block";
    drawtoy();
    line(247,270,205,270,205,280,247,280);//plataforma movil izq//
    line(248,270,290,270,290,280,248,280);//plataforma movil der//
    paintBrush.clearRect(195,280,10,43);
    paintBrush.clearRect(290,280,10,43);
    paintBrush.clearRect(245,40,5,110);
    usedletters = [];
    mistake = 0;
    hits = 0;
    addWord.innerHTML='';
    usedlettersElement.innerHTML='';
    selectRandomWord();
    drawWord();
    document.addEventListener('keydown', letterEvent);  
}


Init.onclick = noLausher;
Add.onclick = lausherText;
initialLausher.onclick = goLausher;
noGrafic_and_lausherInitial.onclick = goLausher;
noGameOver_and_Grafic.onclick = noLausher;
noGoodGame_and_Grafic.onclick = noLausher;
