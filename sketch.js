var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 
  
  r1 = createSprite(100, 50, 50, 80);
  r1.shapeColor = "blue";
  r1.debug = true;
  r2 = createSprite(700, 50,80,30);
  r2.shapeColor = "blue";
  r2.debug = true;

  r2.velocityX = -5;
  r1.velocityX = +5;
}

  

function draw() {
  background(0,0,0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
 if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
 
  bounceOff(r1,r2);
  drawSprites();
}
