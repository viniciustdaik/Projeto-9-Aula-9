//variável
var box;

function setup() {
  createCanvas(400, 400);
  box = createSprite(200, 200, 30, 30);
  box.shapeColor = 'purple';
}
createEdgeSprites();
function draw() {
  background('orange');

  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x +5;
    background('green');
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x -5;
    background('blue');
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y -5;
    background('pink');
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y +5;
    background('red');
  }
  if(keyIsDown(DOWN_ARROW)&&keyIsDown(LEFT_ARROW)){
    background('yellow');
  }
  if(keyIsDown(DOWN_ARROW)&&keyIsDown(RIGHT_ARROW)){
    background('brown');
  }
  if(keyIsDown(UP_ARROW)&&keyIsDown(LEFT_ARROW)){
    background('purple');
  }
  if(keyIsDown(UP_ARROW)&&keyIsDown(RIGHT_ARROW)){
    background('brown');
  }
  drawSprites();
}




