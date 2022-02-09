// AIzaSyBQXL9nP3B0XqAeoEK83lWed5R9pij7Kb0
let obj = document.getElementById("loading");

function loaded(){
    obj.style.display = 'none';
}


console.log("Hello World");

let text = "Rate your favourite search engine.";

var speed;
let i =0;

function type(){
    let han = document.getElementById("run");
    han.innerHTML += text.charAt(i);
    if(text.charAt(i) == ' '){
        speed = 300;
    }
    else{
        speed = 100;
    }
    if(i<text.length){
        setTimeout(type,speed);
        i++;
    }
}

type();



