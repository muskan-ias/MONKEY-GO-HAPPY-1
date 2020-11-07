
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  
  
   monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
 
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey = createSprite(40,330,10,10);
  monkey.scale = 0.1;
  monkey.addAnimation("monkey", monkey_running);
   
ground = createSprite(300,340,600,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
background("skyblue");
 
  if(keyDown("space")&&monkey.y >= 235) {
      monkey.velocityY = -13; 
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  ground.visible = false;
  
  drawSprites(); 

 stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate());
text("Survival Time:" + survivalTime,100, 50);
  
  
  
  
  
  food();
obstacle();




}

function food () {
  if (frameCount%80 === 0) {
    
    banana = createSprite(620,240, 50, 50 )
  banana.y = Math.round(random(120,200));
   banana.addImage( bananaImage);
    banana.scale = 0.1;
    banana.velocityX =-4;           
    banana.lifetime = 220;
    bananaGroup.add(banana);

banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  
  }
}

function obstacle() {
 if (frameCount%300 === 0) {
    
   var obstacle = createSprite(620,240, 50, 50 )
  obstacle.y = Math.round(random(120,200));
   obstacle.addImage( obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX =-4;           
   obstacle.lifetime = 220;
    obstacleGroup.add(obstacle);
 }
  
  
}








