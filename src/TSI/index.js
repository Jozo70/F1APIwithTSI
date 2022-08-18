/////////////////       Custom Banner Randomizer       \\\\\\\\\\\\\\\\\\\\\\

const randPix =["images/banner00.png","images/banner01.png","images/banner02.png","images/banner03.png","images/banner04.png","images/banner05.png","images/banner06.png","images/banner07.png","images/banner08.png","images/banner09.png","images/banner10.png","images/banner11.png","images/banner12.png","images/banner13.png","images/banner14.png","images/banner15.png","images/banner16.png","images/banner17.png","images/banner018.png"];

function choosePic(){
    let randNum = Math.floor(Math.random() * randPix.length);
    document.getElementById("f1-banner").src = randPix[randNum];
}

window.onload = choosePic;

/////////////////       Connecting to Fellow F1 API       \\\\\\\\\\\\\\\\\\\\\\

let randCircuit = document.getElementById('f1-circuit')

let myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "97e87decb069e0485e0a2c52943b2f38");
myHeaders.append("x-rapidapi-host", "v1.formula-1.api-sports.io");

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


fetch("https://api-formula-1.p.rapidapi.com/circuits", {
	"method": "GET",
	"headers": {
        "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
		"x-rapidapi-key": "97e87decb069e0485e0a2c52943b2f38"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});

fetch("https://v1.formula-1.api-sports.io/circuits?")
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

/////// Java Clock (Live Time) for enhanced user expeirience

        var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}











// Another F1 API - GITHUB (https://github.com/iverly/f1-api/blob/main/README.md) //

//const f1 = require('f1-api');

//f1.getDriverInformation('russell')
//    .then({id, code, number, firstName, lastName, birthday, nationality} => {
//        // do some thing with data !
//    });

//f1.getConstructorInformation('mercedes')
//    .then({id, name, nationality} => {
//        // do some thing with data !
//    });

//f1.getConstructors('2018')
//    .then(console.log);

//f1.getCurrentDriverStandings()
//    .then(console.log)

//f1.getCurrentSeasonRacesSchedule()
//    .then(console.log)

/////////////////       Kanye's Quotes (Tutorial)       \\\\\\\\\\\\\\\\\\\\\\
let quotesDiv = document.getElementById('quotes')

fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(quote => {
        quotesDiv.innerHTML += `<p> ${quote.quote}</p>`
})





/////////////////       Cat Pics (Tutorial)       \\\\\\\\\\\\\\\\\\\\\\
let catButton = document.getElementById('gib-cat')

catButton.addEventListener("click",evt => {

    let catDiv = document.getElementById('catto-picco')

    fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(cats => {
            cats.forEach(cat =>{
                catDiv.innerHTML = `<h3>Here is a cat taken from a random bag in the closest river </h3>
                <img src="${cat.url}" alt="kitty" style="width:50%" />`
            });
    })
})




