export default function sketch(s) {
  let radius, directionX, directionY, value, x, y, backgroundColor, speed, dir, scl, fish, width, height;  

  const easing = 0.05

  s.setup = () => {
    s.createCanvas(s.windowWidth, s.windowHeight);
	radius = 10;
	directionX = 0;
	directionY = 0;
    x = 50;
    y = 50;
    width = s.windowWidth;
    height = s.windowHeight;
    speed = .5;
    dir = 0;
    scl = 1;
    fish = s.loadImage("assets/RoboFish.png");
    //s.imageMode(s.CENTER);
  };

  s.draw = () => {
  s.change();
  s.background(0,255,0); 
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
  var angle = s.atan2( directionY*speed, directionX*speed);
  var tDir =  angle / s.TWO_PI;
  tDir -= s.round( tDir );
  tDir *= s.TWO_PI;
  var dDir = tDir - dir;
  if(tDir-dir > s.PI+s.QUARTER_PI && dir <-2 || tDir-dir < -s.PI-s.QUARTER_PI && dir >2 ){
    dir = tDir;
  }
  else{
  dir += dDir * easing;
  }
  // changing Position
  x=x+speed*directionX;
  y=y+speed*directionY;
  s.push();
  s.translate(x, y);
  if(directionX >= 0){
  s.scale(scl,scl);
  s.rotate(dir);
  }else{
  s.scale(scl,-scl);
  s.rotate(-dir);
  }
  s.image(fish,-125, -75);
  s.pop();
  value=0;
  };

  s.up = () => {
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
  };
  
  s.keyPressed = () => {
  	s.print(s.key);
 	value= s.key;
  }
  
 s.change = (change) => {
 value = change;
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
}
