var PLAY = 1;
var END = 0;
var gameState = PLAY;

var background1;
var background2;

var guy1;

var ground;

var gameOver;
var restart;

function preload(){

guy = loadImage("guy-removebg-preview.png");
background1 = loadImage("insolence-mind.png");
eyesImage = loadImage("eye-of-insolence (2).png");
gameOverImg = loadImage("game-over (2).png");
restartImg = loadImage("restart-button2.png");

}

function setup() {
 createCanvas(1318,657);
var background2 = createSprite(1050,328.5,windowWidth,windowHeight)
var guy1 = createSprite(30,590,100,100);

var ground = createSprite(659,652,1318,10)

gameOver = createSprite(300,100);
gameOver.addImage(gameOverImg);

restart = createSprite(300,140);
restart.addImage(restartImg);

background2.addImage(background1);

guy1.addImage(guy);

background2.scale = 1.7;

gameOver.scale = 0.5;
restart.scale = 0.5;

gameOver.visible = false;
restart.visible = false;

ground.visible = false;

background2.velocityX = -4;

eyesGroup = new Group();

}

function draw() {
 background("0");
 
 if (gameState===PLAY){

  if(keyDown("space") && guy1.y >= 159) {
    guy1.velocityY = -12;
  }

  guy1.velocityY = guy1.velocityY + 0.8

  if (background2.x < 0){
    background2.x = background2.width/2;
  }

  guy1.collide(ground);
  spawnEyes();

  if(eyesGroup.isTouching(guy1)){
      gameState = END;
  }
}
else if (gameState === END) {
  gameOver.visible = true;
  restart.visible = true;

  background2.velocityX = 0;
  guy1.velocityY = 0;
  eyesGroup.setVelocityXEach(0);
  
  eyesGroup.setLifetimeEach(-1);
  
  if(mousePressedOver(restart)) {
    reset();
  }
}

 drawSprites();
}

function spawnEyes() {
  
  if (frameCount % 60 === 0) {
    var eyes = createSprite(600,120,40,10);
    eyes.y = Math.round(random(80,120));
    eyes.addImage(eyesImage);
    eyes.scale = 0.5;
    eyes.velocityX = -3;
    
    
    cloud.lifetime = 200;
    
  
    eyes1.depth = eyes1.depth;
    guy1.depth = guy1.depth + 1;
    
    
    eyesGroup.add(eyes);
  }
  
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  eyesGroup.destroyEach();
  
  
 
  
  score = 0;
  
}