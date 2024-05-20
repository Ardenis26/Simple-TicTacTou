const canvas = document.getElementById("cvn");
const canvasWinner = document.getElementById("winnerIco");
const Xcanvas = document.getElementById("Xicon");
const Ocanvas = document.getElementById("Oicon");
const xCtx = Xcanvas.getContext("2d");
const oCtx = Ocanvas.getContext("2d");
const ctx = canvas.getContext("2d");
const Wctx = canvasWinner.getContext("2d")
const lineCtx = canvas.getContext("2d");
const winningMoves = [/[123]/g,/[456]/g,/[789]/g,/[147]/g,/[258]/g,/[369]/g,/[159]/g,/[357]/g]
var allMoves = []
var player = "X";
var Xmoves = ["0"];
var Omoves = ["0"];
var XScore = 0;
var OScore = 0;


//--- Draws player icons---//

function drawsPlayerIcons(){
  drawX(10,10,60,15,xCtx)
  drawO(40,40,30,15,oCtx)
}

//-------------------------//

//--Draw X for game boxes--//

function drawX(X,Y,S,W,C){
 C.beginPath();
 C.lineWidth = W;
 C.moveTo(X, Y);
 C.lineTo(X+S,Y+S);
 C.strokeStyle = "black";
 C.stroke();
 C.closePath()
 C.beginPath();
 C.moveTo(X+S, Y);
 C.lineTo(X,Y+S);
 C.strokeStyle = "black";
 C.stroke();
 C.closePath()

}
//-------------------//
//--Draw X for game boxes--//
function drawO(X,Y,R,W,C){
 C.beginPath()
 C.lineWidth = W;
 C.arc(X,Y,R,0,2 * Math.PI);
 C.stroke()
 C.closePath()
}
//-------------------------//


//---This function draw Borders---//

function drawBorders(){
drawsPlayerIcons()
ctx.fillStyle = "black";
ctx.fillRect(100, 0, 10, 320);
ctx.fillRect(210, 0, 10, 320);
ctx.fillRect(0,100, 320, 10);
ctx.fillRect(0,210, 320, 10);

}
//------------------------------//
drawBorders()
//ctx.clearRect(0,0,320,320)


//---This function fills box with X or O---//

function fillBox(event){
const b = event.target.getBoundingClientRect();
const y = event.clientY - b.top;
const x = event.clientX - b.left;

if(player == "X"){
if(y <= 100 && x <= 100 && allMoves.find(a =>{return a == "1"}) == undefined){ 
 drawX(20,20,60,15,ctx)
 allMoves.push("1")
 Xmoves.push("1")
 Winner(Xmoves,player)
 player = "O"
}
else if(y <= 100 && x >= 110 && x <= 210 && allMoves.find(a =>{return a == "2"}) == undefined ){ 
 drawX(130,20,60,15,ctx)
 allMoves.push("2")
 Xmoves.push("2")
 Winner(Xmoves,player)
 player = "O"
}

else if(y <= 100 && x >= 220 && x <= 320 && allMoves.find(a =>{return a == "3"}) == undefined ){
 drawX(240,20,60,15,ctx)
 allMoves.push("3")
 Xmoves.push("3")
 Winner(Xmoves,player)
 player = "O"
}

else if(y >=110 && y <= 210 && x <=100 && allMoves.find(a =>{return a == "4"}) == undefined ){
 
 drawX(20,130,60,15,ctx)
 allMoves.push("4")
 Xmoves.push("4")
 Winner(Xmoves,player)
 player = "O"
}

else if(y >=110 && y <= 210 && x >=110 && x <=210 && allMoves.find(a =>{return a == "5"}) == undefined ){
 drawX(130,130,60,15,ctx)
 allMoves.push("5")
 Xmoves.push("5")
 Winner(Xmoves,player)
 player = "O"
}

else if(y >=110 && y <= 210 && x >=220 && x <=320 && allMoves.find(a =>{return a == "6"}) == undefined ){
 drawX(240,130,60,15,ctx)
 allMoves.push("6")
 Xmoves.push("6")
 Winner(Xmoves,player)
 player = "O"
}

else if(y >=220 && x <=100 && allMoves.find(a =>{return a == "7"}) == undefined ){
 drawX(20,240,60,15,ctx)
 allMoves.push("7")
 Xmoves.push("7")
 Winner(Xmoves,player)
 player = "O"
}

else if(y >=220 && x >=110 && x <=210 && allMoves.find(a =>{return a == "8"}) == undefined ){
 drawX(130,240,60,15,ctx)
 allMoves.push("8")
 Xmoves.push("8")
 Winner(Xmoves,player)
 player = "O"
}

else if(y >=220 && x >=220 && x <=320 && allMoves.find(a =>{return a == "9"}) == undefined ){
 drawX(240,240,60,15,ctx)
 allMoves.push("9")
 Xmoves.push("9")
 Winner(Xmoves,player)
 player = "O"
}
}
else{
if(y <= 100 && x <= 100 && allMoves.find(a =>{return a == "1"}) == undefined ){ 
 drawO(50,50,30,15,ctx)
 allMoves.push("1")
 Omoves.push("1")
 Winner(Omoves,player)
 player = "X"
}
else if(y <= 100 && x >= 110 && x <= 210 && allMoves.find(a =>{return a == "2"}) == undefined ){ 
 drawO(160,50,30,15,ctx)
 allMoves.push("2")
 Omoves.push("2")
 Winner(Omoves,player)
 player = "X"
}

else if(y <= 100 && x >= 220 && x <= 320 && allMoves.find(a =>{return a == "3"}) == undefined ){
 drawO(270,50,30,15,ctx)
 allMoves.push("3")
 Omoves.push("3")
 Winner(Omoves,player)
 player = "X"
}

else if(y >=110 && y <= 210 && x <=100 && allMoves.find(a =>{return a == "4"}) == undefined ){
 drawO(50,160,30,15,ctx)
 allMoves.push("4")
 Omoves.push("4")
 Winner(Omoves,player)
 player = "X"
}

else if(y >=110 && y <= 210 && x >=110 && x <=210 && allMoves.find(a =>{return a == "5"}) == undefined ){
 drawO(160,160,30,15,ctx)
 allMoves.push("5")
 Omoves.push("5")
 Winner(Omoves,player)
 player = "X"
}

else if(y >=110 && y <= 210 && x >=220 && x <=320 && allMoves.find(a =>{return a == "6"}) == undefined ){
 drawO(270,160,30,15,ctx)
 allMoves.push("6")
 Omoves.push("6")
 Winner(Omoves,player)
 player = "X"
}

else if(y >=220 && x <=100 && allMoves.find(a =>{return a == "7"}) == undefined ){
 drawO(50,270,30,15,ctx)
 allMoves.push("7")
 Omoves.push("7")
 Winner(Omoves,player)
 player = "X"
}

else if(y >=220 && x >=110 && x <=210 && allMoves.find(a =>{return a == "8"}) == undefined ){
 drawO(160,270,30,15,ctx)
 allMoves.push("8")
 Omoves.push("8")
 Winner(Omoves,player)
 player = "X"
}

else if(y >=220 && x >=220 && x <=320 && allMoves.find(a =>{return a == "9"}) == undefined ){
 drawO(270,270,30,15,ctx)
 allMoves.push("9")
 Omoves.push("9")
 Winner(Omoves,player)
 player = "X"
}
}
}

//
//
//----Looks for winner----// 
function Winner(m,p){

for(var i = 0; i <= 8; i++){
if(m.join("").match(winningMoves[i]) != null){
 if(m.join("").match(winningMoves[i]).length == 3){
  if(p == "X"){
    document.getElementById("cvn").style.pointerEvents="none";
    displayLine(i)
    document.getElementById("winnerIco").setAttribute("width","150")
    document.getElementById("winnerIco").setAttribute("height","150")
    XScore++
    document.getElementById("X-num").innerText = XScore
    drawX(10,10,130,25,Wctx)
    setTimeout(()=>{
     canvas.style.display="none"
     document.getElementById("menu").style.display="flex"
    },1000)
    break;
  } 
  else if( p == "O"){
    document.getElementById("cvn").style.pointerEvents="none";
    displayLine(i)
    document.getElementById("winnerIco").setAttribute("width","150")
    document.getElementById("winnerIco").setAttribute("height","150")
    OScore++
    document.getElementById("O-num").innerText = OScore
    drawO(75,75,60,25,Wctx)
    setTimeout(()=>{
     canvas.style.display="none"
     document.getElementById("menu").style.display="flex"
    },1000)
    break;
  }
 }

else if( allMoves.length == 9 ){
  document.getElementById("cvn").style.pointerEvents="none";
  document.getElementById("winnerIco").setAttribute("width","300")
  document.getElementById("winnerIco").setAttribute("height","150")
  document.getElementById("comment").innerText=""
  Wctx.font = "100px arial";
  Wctx.fillText("DRAW", -5, 100);
  setTimeout(()=>{
    canvas.style.display="none"
    document.getElementById("menu").style.display="flex"
   },1000)
  break
}
}    
}
}
//------------------------//


//---Dsiplays line---//

function displayLine(i){
  ctx.lineWidth = 1;
 if(i == 0){ 
  ctx.beginPath();
  ctx.moveTo(0,40) 
  ctx.lineTo(320,40)
  ctx.lineTo(320,60)
  ctx.lineTo(0,60)
  ctx.fillStyle="black"
  ctx.fill()
  ctx.stroke()
 }
 else if(i == 1){ 
  ctx.beginPath();
  ctx.moveTo(0,150) 
  ctx.lineTo(320,150)
  ctx.lineTo(320,170)
  ctx.lineTo(0,170)
  ctx.fillStyle="black"
  ctx.fill()
  ctx.stroke()
 }
 else if(i == 2){ 
  ctx.beginPath();
  ctx.moveTo(0,260) 
  ctx.lineTo(320,260)
  ctx.lineTo(320,280)
  ctx.lineTo(0,280)
  ctx.fillStyle="black"
  ctx.fill()
  ctx.stroke()
 }
 else if(i == 3){ 
  ctx.beginPath();
  ctx.moveTo(60,0) 
  ctx.lineTo(60,320)
  ctx.lineTo(40,320)
  ctx.lineTo(40,0)
  ctx.fillStyle="black"
  ctx.fill()
  ctx.stroke()
}
 else if(i == 4){ 
  ctx.beginPath();
  ctx.moveTo(170,0) 
  ctx.lineTo(170,320)
  ctx.lineTo(150,320)
  ctx.lineTo(150,0)
  ctx.fillStyle="black"
  ctx.fill()
  ctx.stroke()
 }
 else if(i == 5){ 
  ctx.beginPath();
  ctx.moveTo(280,0) 
  ctx.lineTo(280,320)
  ctx.lineTo(260,320)
  ctx.lineTo(260,0)
  ctx.fillStyle="black"
  ctx.fill()
  ctx.stroke()
 }
 else if(i == 6){ 
  ctx.beginPath();
  ctx.moveTo(0,15) 
  ctx.lineTo(15,0)
  ctx.lineTo(315,300)
  ctx.lineTo(300,315)
  ctx.fillStyle="black"
  ctx.fill()
  ctx.stroke()
 }
 else if(i == 7){
  ctx.beginPath();
  ctx.moveTo(305,0) 
  ctx.lineTo(320,15)
  ctx.lineTo(15,320)
  ctx.lineTo(0,305)
  ctx.fillStyle="black"
  ctx.fill()
  ctx.stroke()
 }

}
//------------------------//



//---Play Again-Restar Game not Scores---//

function playAgain(){
  //lineCtx.clearRect(0,0,320,320)
  document.getElementById("cvn").style.pointerEvents="unset";
  ctx.clearRect(0,0,320,320)
  allMoves = []
  player = "X";
  Xmoves = ["0"];
  Omoves = ["0"];
  drawBorders()
  document.getElementById("menu").style.display="none"
  canvas.style.display="unset"
  
}

//---------------------------------------//
//---Restar all game---//

function restarGame(){
  document.getElementById("cvn").style.pointerEvents="unset";
  ctx.clearRect(0,0,320,320)
  allMoves = []
  player = "X";
  Xmoves = ["0"];
  Omoves = ["0"];
  XScore = 0;
  OScore = 0;
  document.getElementById("X-num").innerText=0
  document.getElementById("O-num").innerText=0
  drawBorders()
  document.getElementById("menu").style.display="none"
  canvas.style.display="unset"
}

//---------------------//


