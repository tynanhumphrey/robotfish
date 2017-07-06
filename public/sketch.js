var radius = 10, directionX = 0, directionY = 0;
var value;
var x=500, y=500, speed=.5, dir=0,scl = 1;
var fish;
var easing = 0.05;
// =========================================================
function setup() {
  fish = loadImage("assets/RoboFish.png");
  imageMode(CENTER);
  createCanvas(windowWidth,windowHeight);
  smooth();
  noStroke();
  ellipseMode(RADIUS);
}

function draw() {
  checkStream();
  background(0,255,0); 
  // check boundaries
  if ((x>width+125))
  {   
    x=-125;
  }else if(x<-125){
    x=width+125;
  }
  if ((y>height+50))
  {   
    y=-50;
  }else if(y<-50){
    y=height+50;
  }
  //Change Fish's Angle
  var angle = atan2( directionY*speed, directionX*speed);
  var tDir =  angle / TWO_PI;
  tDir -= round( tDir );
  tDir *= TWO_PI;
  var dDir = tDir - dir;
  if(tDir-dir > PI+QUARTER_PI && dir <-2 || tDir-dir < -PI-QUARTER_PI && dir >2 ){
    dir = tDir;
  }
  else{
  dir += dDir * easing;
  }
  // changing Position
  x=x+speed*directionX;
  y=y+speed*directionY;
  push();
  translate(x, y);
  if(directionX >= 0){
  scale(scl,scl);
  rotate(dir);
  }else{
  scale(scl,-scl);
  rotate(-dir);
  }
  image(fish,0,0);
  pop();
  value=0;
}
function keyPressed(){
  print(key);
  value=key;
}
function checkStream()
{
    if(value == 'A')
    {
      if (directionX>-10){
      directionX=directionX-1;
      }
    }
    else if (value == 'D')
    {
      if (directionX<10){
      directionX=directionX+1;
    }
    }
    else if (value == 'W')
    {
      if(directionY>-10){
      directionY=directionY-1;
      }
    }
    else if (value == 'S')
    {
      if(directionY<10){
      directionY=directionY+1;
      }
    } else if (value == '½')
    {
      if(scl>.5){
      scl=scl-.1;
      }
    } else if (value == '»')
    {
      if(scl<2){
      scl=scl+.1;
      }
    } 
}