
var xm, ym;            //postion of center screen
var xs;                //where ball starts
var xspeed;
var rectX, rectY;      // Position of square button
var circleX, circleY;  // Position of circle button
var rectXSize, rextYSize;//Diameter of rectangle
var circleSize = 50;   // Diameter of circle
var baseColor, diffColor;
var rectOver = false;
var circleOver = false;
var screenOn=255;

function setup() {
  createCanvas(500,400);//tv size
  background('#573618');//tv background
  baseColor = color(25);
  diffColor = color(51);
  x= width;
  y= height;
  xm = x/2;
  ym = y/2;
  xs = 100;
  xspeed = 3;
  rectX = x/7;
  rectY = y/7*6;
  rectXSize = 100;
  rectYSize = 50;
  circleX = x/5*4;
  circleY = y/12*11;
  offset = -25;
  ellipseMode(CENTER);
  
}

function draw() {
  let screenX = 30;
  let screenY = 30;
  let screenW = 430;
  let screenH = 280;
  
  //TV setup
  push();
  rectMode(CENTER);
  
  //dark gray box
  fill(60);
  rect(xm,ym+offset,475,325,5);
  
  //screen
  fill(baseColor);
  rect(xm,ym+offset,screenW,screenH,25);
  
  //minor decorations
  fill('#C20704')
  ellipse(275,365,15);
  ellipse(300,365,15);
  ellipse(325,365,15);
  pop();
  
  update(mouseX, mouseY);
  
  if (rectOver) {
    fill(diffColor);
  } else {
    fill(25);
  }
  rect(rectX,rectY,rectXSize,rectYSize);
  
  if (circleOver) {
    fill(diffColor);
  } else {
    fill(25);
  }
  ellipse(circleX,circleY,circleSize);
  
  //text for buttons
  //text for power
  push();
  fill(200);
  textSize(30);
  textStyle(BOLD);
  text('Power',75,377)
  //text for circle
  text('CH',377,377);
  pop();
  
  //moving circle
  fill(25);
  noStroke();
  ellipse(xs,ym+offset,50);
  xs+= xspeed;
  if (xs <= 65 || xs>screenW){
    xspeed *= -1;
  }
  
}

function update( x,  y) {
  if ( overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
    rectOver = false;
  } else if ( overRect(rectX, rectY, rectXSize, rectYSize) ) {
    rectOver = true;
    circleOver = false;
  } else {
    circleOver = rectOver = false;
  }
}

function mousePressed() {
  if (rectOver) {
    baseColor = screenOn;
  }
}
function overRect( x,  y,  width,  height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}