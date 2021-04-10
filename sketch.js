var bg,bg_Img;
var door,door_Img,doorG;
var climber,climber_Img, climberG;
var ghost,ghost_Img;
var invisiblething,invisiblethingG;
var gameState = "PLAY";

function preload(){
  bg_Img = loadImage("tower.png"); 
  door_Img = loadImage("door.png");
  climber_Img = loadImage("climber.png");
  ghost_Img = loadImage("ghost-standing.png");
}
function setup(){
  createCanvas (600,600);
  bg = createSprite(300,300);
  bg.addImage(bg_Img); 
   bg.velocityY=1;
  doorG=new Group();
  climberG = new Group();
  invisiblethingG = new Group();
  
  
  ghost = createSprite(200,100);
  ghost.addImage(ghost_Img);
  ghost.scale=0.3;
}
function draw(){
  background(0);
  if (gameState === "PLAY"){
  if (bg.y > 550){
    bg.y = 300;
    
    
  }
  
  
  if (keyDown ("left_arrow")){
      ghost.x=ghost.x-3;
    
      }
  if (keyDown ("right_arrow")){
    ghost.x=ghost.x+3;
  }
  if (keyDown ("space")){
    ghost.velocityY = -5;
    
  }
  
  ghost.velocityY = ghost.velocityY+0.8
  
  if (climberG.isTouching(ghost)){
    ghost.velocityY=0;
  }
    if (invisiblethingG.isTouching(ghost)|| ghost.y> 600){
      ghost.destroy();
      gameState = "END";
    }
   
  spawnDoor();
  drawSprites();
  }
  if (gameState === "END"){
    fill("blue");
    text ("Game Over" ,200,200);
  }
}
function spawnDoor(){
  if (frameCount % 240 === 0){
    door = createSprite(200,-10);
    door.addImage(door_Img);
    door.x = Math.round(random(120,500));
    door.velocityY=4;
    door.lifetime =650;
    doorG.add(door);
    
    climber = createSprite(200,40);
    climber.addImage(climber_Img);
    climber.x=door.x
    climber.velocityY=door.velocityY
    climber.lifetime = 650;
    climberG.add(climber)
    
    ghost.depth = door.depth;
    ghost.depth = ghost.depth+1;
   
    invisiblething = createSprite(door.x,45,climber.width,2);
    invisiblething.visible=false;
    invisiblething.velocityY=door.velocityY
    invisiblethingG.add(invisiblething)
  
  }
  
}


