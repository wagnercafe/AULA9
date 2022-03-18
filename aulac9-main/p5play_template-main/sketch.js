var box

function setup() {
  createCanvas(600,400);
  //criar sprite aqui
 box=createSprite(200,200,30,30)

}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 2;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x - 2;
  }
    
  
  //código para mostrar sprites
  drawSprites()
}




