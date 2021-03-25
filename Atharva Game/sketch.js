const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var canvas, backgroundImage;
var mc2;

var gameState = 1;
var mc1, wall, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16; 
var lazer1, lazer2, lazer3;
var boss;

var lives;
var score = 3;
var HP=100;
var HP1=100;

function preload(){

  if(gameState = 1){
    backgroundImage = loadImage("lvl1 maze.jpg");
    lives3 = loadAnimation("heart3.png");
    lives2 = loadAnimation("heart2.png");
    lives1 = loadAnimation("heart1.png");
    mc2 = loadAnimation( "a.png", "b.png", "c.png", "d.png", "e.png", "f.png", "g.png", "h.png", "i.png", "j.png", "k.png", "l.png", "m.png",);
    boss1 = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png",
    "11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png",
    "22.png", "23.png","24.png","25.png","26.png","27.png","28.png","29.png","30.png","31.png","32.png",
    "33.png","34.png", "35.png","36.png","37.png","38.png","39.png","40.png","41.png","42.png","43.png",
    "44.png","45.png","46.png", "47.png","48.png","49.png","50.png","51.png","52.png","53.png","54.png",
    "55.png", "56.png");
    maze_music = loadSound('maze music.mp3');
  }

  /*if(gameState = 2){

    backgroundImage = loadImage("dungeon.jpg");

  }*/
}

function setup(){
 
  canvas = createCanvas(600, 600);
  //canvas = createCanvas(1200, 600);
  if(gameState = 1){

    maze_music.loop();

    life = createSprite(550, 20, 20, 20);
    life.addAnimation("lives3", lives3);
    life.addAnimation("lives2", lives2);
    life.addAnimation("lives1", lives1);
    life.scale = 0.25;

    wall1 = createSprite(10,70,50,1000);
    wall2 = createSprite(370,10,500,20);
    wall3 = createSprite(207,145,172,30);
    wall4 =createSprite(379,190,30,140);
    wall5 = createSprite(500,135,200,30);
    wall6 = createSprite(300,250,130,30);
    wall7 = createSprite(138,383,30,272);
    wall8 = createSprite(80,401,100,30);
    wall9 = createSprite(370,440,30,139);
    wall10 = createSprite(360,395,257,30);
    wall11 = createSprite(250,497,210,30);
    wall12 = createSprite(480,325,20,123);
    wall13 = createSprite(590,270,22,455);
    wall14 = createSprite(533,497,95,10);
    wall15 = createSprite(300,590,600,10);

    wall16 = createSprite(597,550,15,80);

    mc1 = createSprite(85,35,20,20);
    mc1.addAnimation("player", mc2);
    mc1.scale = 0.5;
    mc1.setCollider("circle", 0,30, 80);
    //mc1.debug=true;

    boss = createSprite(500, 430,20,20);
    boss.addAnimation("boss", boss1);
    boss.scale = 1.5;
    boss.setCollider("circle", 0,0, 80);
    //boss.debug=true;

    lazer1 = createSprite(560, 68, 5,60);
    lazer1.shapeColor = "red";
    lazer1.velocityX = -5;
    //lazer1.debug = true;

    lazer2 = createSprite(560, 545, 5,55);
    lazer2.shapeColor = "red";
    lazer2.velocityX = -7;
    //lazer2.debug = true;
       
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    wall5.visible = false;
    wall6.visible = false;
    wall7.visible = false;
    wall8.visible = false;
    wall9.visible = false;
    wall10.visible = false;
    wall11.visible = false;
    wall12.visible = false;
    wall13.visible = false;
    wall14.visible = false;
    wall15.visible = false;
    boss.visible = false;

  }  

  /*if(gameState = 1){



  }*/

}


function draw(){

 //console.log(gameState);

 mc1.collide(wall1);
 mc1.collide(wall2);
 mc1.collide(wall3);
 mc1.collide(wall4);
 mc1.collide(wall5);
 mc1.collide(wall6);
 mc1.collide(wall7);
 mc1.collide(wall8);
 mc1.collide(wall9);
 mc1.collide(wall10);
 mc1.collide(wall11);
 mc1.collide(wall12);
 mc1.collide(wall13);
 mc1.collide(wall14);
 mc1.collide(wall15);

  mc1.velocityX = 0;
  mc1.velocityY = 0;
  
  if (keyDown("LEFT")) {
    mc1.velocityX = - 3;
  }
  
  if (keyDown("RIGHT")) {
    mc1.velocityX = 3;
  }
  
  if (keyDown("UP")) {
    mc1.velocityY = - 3;
  }
  
  if (keyDown("DOWN")) {
    mc1.velocityY = 3;
  }

  if(gameState = 1){

    background(backgroundImage);

    if(lazer1.isTouching(wall1)){

      lazer1.velocityX = 5;

    }
    if(lazer1.isTouching(wall13)){

      lazer1.velocityX = -5;

    }

    if(lazer2.isTouching(wall1)){

      lazer2.velocityX = 7;

    }
    if(lazer2.isTouching(wall16)){

      lazer2.velocityX = -7;

    }

  }
  livess();
  gameover();
  levelUp();

  drawSprites(); 
}

function livess()
{
if(frameCount%30===0)
{
  if(lazer1.isTouching(mc1)){
    score-=1;
    console.log(score);
  }

  if(lazer2.isTouching(mc1)){
    score-=1;
    console.log(score);
  }

  if(score === 3){
    life.changeAnimation("lives3", lives3);
  }
  else if(score ===2){
    life.changeAnimation("lives2",lives2);
  }
  else{
    life.changeAnimation("lives1",lives1)
  }
}
}

function gameover(){
  if(score === 0){
    lazer1.destroy();
    lazer2.destroy();
    life.destroy();
    text("GAME OVER", 300,300);
  }
}

function levelUp(){

  if(mc1.isTouching(wall16)){

    gameState = 2;
    backgroundImage = loadImage("dungeon.jpg");
    //resizeCanvas(1200, 600);
    
    fill("white");
    text("SCORE : "+HP,500,40);
    textSize(10);

    fill("white");
    text("SCORE : "+HP1,100,40);
    textSize(10);   
    
    lazer1.destroy();
    lazer2.destroy();
    life.destroy();
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();
    wall6.destroy();
    wall7.destroy();
    wall8.destroy();
    wall9.destroy();
    wall10.destroy();
    wall11.destroy();
    wall12.destroy();
    wall13.destroy();
    wall14.destroy();
    wall15.destroy();
    wall16.destroy();
    mc1.scale = 1.1;
    mc1.x = 100;
    mc1.y = 430;
    boss.visible = true;
    
  }
}


