var y=0;
var r=10;
var g=25.5;
var yd=0
var yx=0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  
  push();
  rectMode(CENTER);
  fill(100);
  rect(width/2,height/2,300,400,10);
  pop();
  
  frameRate(60);
  var half_screen = width/2;
  var onefour_screen = width/4;
  var threefour_screen = width/4*3;
  
  let lwall = 65;
  let rwall = 335;
  let player = constrain(mouseX,lwall,rwall);
  
  r =(r+.25) %100;
  g =(g+.4) %256;
  
  ellipseMode(CENTER);
  fill(r,g,240);
  let firstBubble = ellipse(onefour_screen,height+100+y,40);
  let secondBubble = ellipse(half_screen,height+15+yx,30);
  let thirdBubble = ellipse(threefour_screen,height+175+yd,60);
  
  let topb = map(mouseX,65,335,65,335,true);
  ellipse(topb,height+75+y,20);
  
  let botb = map(mouseX,0,height,100,300);
  ellipse(botb,height+200+yd,45);
  
  y--;
  yd = yd-1.5;
  yx = yx-.90;
  
  let d = dist (topb,height+75+y,botb,height+200+yd);
  
  print ('smallest bubble is at', mouseX,mouseY);
  print ('distance between both movable bubbles is', d);
  
}