
var bg,background;
var tom,jerry;
var tomImg1,tomImg2,tomImg3,tomImg4;
var jerryImg1,jerryImg2,jerryImg3,jerryImg4;
var keyCode;





function preload(){
    bg = loadImage("images/garden.png");
     tomImg1= loadAnimation("images/tomOne.png"); 
     tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png"); 
     tomImg3= loadAnimation("images/tomFour.png");
      jerryImg1=loadAnimation("images/jerryOne.png"); 
      jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png"); 
    jerryImg3=loadAnimation("images/jerryFour.png");
}

function setup() {
createCanvas(600,600)
  
  background=createSprite(400,200)
  background.addImage("garden",bg);
  background.scale=0.8;
  
  
  tom=createSprite(500,400);
  tom.addAnimation("tom1",tomImg1);
  tom.scale=0.1;
  
  
  
  jerry=createSprite(100,400);
  jerry.addAnimation("jerry1",jerryImg1);
  jerry.scale=0.1;
 
  
}

function draw() {
        if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
            tom.velocityX=0;
            tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2; 
        tom.changeAnimation("tomLastImage"); 
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15; 
        jerry.changeAnimation("jerryLastImage"); } 
    
drawSprites();
        }

 function keyPressed(){
    if(keyCode === LEFT_ARROW){ 
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
         tom.changeAnimation("tomRunning"); 
         jerry.addAnimation("jerryTeasing", jerryImg2);
     jerry.frameDelay = 25;
      jerry.changeAnimation("jerryTeasing"); }
 }
