var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,
wall16,wall17,wall18,wall19,wall20,wall21,wall23,wall24,wall25,wall26
var redBall
var coin,coinGroup,coinImg
var diamond,diamondImg;
var snake,snakeImg;
var edges;
var score;
var bg;
var diamondScore
var gameState
var timer=60
var coinSound,diamondSound,gameOverSound
var trophy


function preload(){
  redBallImg=loadImage("Images/redBall.png")
  coinImg=loadImage("Images/coin.png")
  snakeImg=loadImage("Images/snake.png")
  diamondImg=loadImage("Images/diamond.png")
  coinSound=loadSound("coinSound.mp3")
  diamondSound=loadSound("diamondSound.mp3")
  gameOverSound=loadSound("gameOver.wav")
 
    }

function setup() {
  createCanvas(800,600);
  wall1=createSprite(400, 20, 630, 10);
  wall2=createSprite(20, 300, 10, 500);
  wall3=createSprite(370, 550, 700, 10);
  wall4=createSprite(710, 250, 10, 450);
  wall5=createSprite(630, 430, 170, 10);
  wall6=createSprite(660, 250, 100, 10);
  wall7=createSprite(610, 300, 10, 100);
  wall8=createSprite(500, 250, 10, 170);
  wall9=createSprite(405, 340, 200, 10);
  wall10=createSprite(490, 170, 210, 10);
  wall11=createSprite(395, 210, 10, 80);
  wall12=createSprite(300, 295, 10, 100);
  wall13=createSprite(270, 240, 80, 10);
  wall14=createSprite(230, 205, 10, 80);
  wall14=createSprite(300, 70, 10, 100);
  wall15=createSprite(370, 380, 10, 90);
  wall16=createSprite(315, 430, 120, 10);
  wall17=createSprite(250, 395, 10, 80);
  wall18=createSprite(300, 490, 10, 120);
  wall19=createSprite(180, 500, 10,100);
  wall20=createSprite(660, 100, 100,10);
  wall21=createSprite(150, 70, 10,100);
  wall22=createSprite(150, 125, 90,10);
  wall23=createSprite(100, 190, 10,140);
  wall24=createSprite(120, 260, 50,10);
  wall25=createSprite(150, 290, 10,70);
  wall26=createSprite(76, 405, 100,10);
 

  redBall=createSprite(50,50,40,40)
  redBall.addImage("redBallImg",redBallImg)
  redBall.scale=0.2
  
 
  coinGroup= new Group()

  edges=createEdgeSprites(); 

diamondsGroup= new Group()
snakesGroup= new Group()



//redBall.debug=true
score=0

addCoins()
addDiamonds()
addsnakes()

diamondScore=0
gameState="play"

}





function draw() {
  background("orange");  
  drawSprites();
  fill("white")
  text("Score-"+score,550,10)

  text("Time Remaining-"+Math.round(timer),380,10)
 
  text("Diamond-"+diamondScore,630,10)


if(gameState==="end"){
  textSize(40)
  fill("green")
 text("GAME OVER",300,300)

 
}

if(gameState==="play"){
  redBall.overlap(coinGroup,function(collector,collected){
    score++
    coinSound.play()
    collected.destroy()


})


redBall.overlap(diamondsGroup,function(collector,collected){
  diamondScore+=1
  diamondSound.play()
  collected.destroy()


})


redBall.overlap(snakesGroup,function(collector,collected){
  gameOverSound.play()
gameState="end"
collected.destroy()


})

if(keyDown(LEFT_ARROW)){
  redBall.x-=6
}

if(keyDown(RIGHT_ARROW)){
 redBall.x+=6
}

if(keyDown(UP_ARROW)){
 redBall.y-=6
}

if(keyDown(DOWN_ARROW)){
 redBall.y+=6
}

timer-=0.05

if(timer<=0){
  gameOverSound.play()
  gameState="end"
}



}

  
  


 



 
redBall.bounceOff(edges)
redBall.bounceOff(wall1)
redBall.bounceOff(wall2)
redBall.bounceOff(wall3)
redBall.bounceOff(wall4)
redBall.bounceOff(wall5)
redBall.bounceOff(wall6)
redBall.bounceOff(wall7)
redBall.bounceOff(wall8)
redBall.bounceOff(wall9)
redBall.bounceOff(wall10)
redBall.bounceOff(wall11)
redBall.bounceOff(wall12)
redBall.bounceOff(wall13)
redBall.bounceOff(wall14)
redBall.bounceOff(wall15)
redBall.bounceOff(wall16)
redBall.bounceOff(wall17)
redBall.bounceOff(wall18)
redBall.bounceOff(wall19)
redBall.bounceOff(wall20)
redBall.bounceOff(wall21)
redBall.bounceOff(wall22)
redBall.bounceOff(wall23)
redBall.bounceOff(wall24)
redBall.bounceOff(wall25)
redBall.bounceOff(wall26)



}
function addCoins(){
  var position=[
   {x:100,y:100},
   {x:120,y:240},
   {x:330,y:320},
   {x:400,y:320},
   {x:470,y:320},
   {x:290,y:220},
   {x:100,y:385},
   {x:570,y:410},
   {x:690,y:410},
   {x:620,y:80},
   {x:630,y:230},
   {x:40,y:526},
   {x:550,y:530},
   {x:580,y:150},
   {x:400,y:150},
   {x:490,y:150},
   {x:349,y:410},
   {x:370,y:530},
   {x:270,y:530},
   
 
   ]
  for( var i=0;i<19;i++){
    var coin=createSprite(position[i].x,position[i].y)
    coin.addImage("coin",coinImg)
    coin.scale=0.2
    //coin.debug=t
   coinGroup.add(coin)
  }
  
  //coinGroup.overlap(redBall,coll)
  //console.log("hello")
 }

 
 function addDiamonds(){
   var position=[
    {x:290,y:410},
    {x:630,y:410},
    {x:680,y:230},
    {x:45,y:390},
    {x:160,y:530},
    {x:440,y:530},




 ]
 
 for( var i=0;i<6;i++){
  var diamond=createSprite(position[i].x,position[i].y)
  diamond.addImage("diamond",diamondImg)
  diamond.scale=0.07
  diamondsGroup.add(diamond)
}
 
}

function addsnakes(){
var position=[
  {x:680,y:70},
  {x:100,y:520},
  {x:180,y:100},
  {x:210,y:520},
  {x:620,y:520},
  {x:490,y:520},


]
for( var i=0;i<6;i++){
  var snake=createSprite(position[i].x,position[i].y)
  snake.addImage("snake",snakeImg)
  snake.scale=0.2
  snakesGroup.add(snake)
}



}