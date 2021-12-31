//variável
var box;
var edges;

function setup() {
  createCanvas(400, 400);
  box = createSprite(200, 200, 30, 30);
  box.shapeColor = 'white';
  edges = createEdgeSprites();
}

function draw() {
  background('orange');

  if(keyIsDown(RIGHT_ARROW)||keyDown("D")) {
    box.position.x = box.position.x +5;
    background('green');
  }
  if(keyIsDown(LEFT_ARROW)||keyDown("A")){
    box.position.x = box.position.x -5;
    background('blue');
  }
  if(keyIsDown(UP_ARROW)||keyDown("W")){
    box.position.y = box.position.y -5;
    background('pink');
  }
  if(keyIsDown(DOWN_ARROW)||keyDown("S")){
    box.position.y = box.position.y +5;
    background('red');
  }
  if(keyIsDown(DOWN_ARROW)&&keyIsDown(LEFT_ARROW)||
  keyDown("S")&&keyDown("A")){
    background('yellow');
  }
  if(keyIsDown(DOWN_ARROW)&&keyIsDown(RIGHT_ARROW)||
  keyDown("S")&&keyDown("D")){
    background('brown');
  }
  if(keyIsDown(UP_ARROW)&&keyIsDown(LEFT_ARROW)||
  keyDown("W")&&keyDown("A")){
    background('purple');
  }
  if(keyIsDown(UP_ARROW)&&keyIsDown(RIGHT_ARROW)||
  keyDown("W")&&keyDown("D")){
    background('brown');
  }
  box.collide(edges[0]);
  box.collide(edges[2]);
  box.collide(edges[3]);
  box.collide(edges[1]);
  drawSprites();
}




