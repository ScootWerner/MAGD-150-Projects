function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30);
  //black spheres will represent the ground and hills.
  push();
  ellipseMode (RADIUS); //Ellipse is set to radius for checkmarks!!!
  fill (5); // darker than background
  noStroke(); // so hills don't look weird or interfier with each other
  ellipse (75,375,200,125);
  //Same thing as above but this time other half of ground
  ellipseMode (CORNERS); //Ellipse is set to corners for checkmarks!!!
  ellipse (600,650,200,200);
  pop();// don't know when push & pop will effect other things so start now             // right...
  
  //Time to add some stars to the sky
  //first big stars
  push();
  stroke(255);
  strokeWeight(20);// parameters have been set.
  point(25,200);
  point(300,100);
  point(100,40);
  point(50,125);
  point(15,20);
  point(175,65);
  point(245,30);
  point(350,15);
  point(350,175);
  point(375,70);
  pop();
  
  //Small stars
  push();
  stroke(255);
  strokeWeight(12);
  point(25,50);
  point(55,27);
  point(17,100);
  point(45,175);
  point(20,150);
  point(60,225);
  point(13,235);
  point(70,75);
  point(90,105);
  point(125,60);
  point(140,20);
  point(220,50);
  point(190,13);
  point(275,70);
  point(285,30);
  point(315,55);
  point(385,35);
  point(365,120);
  point(340,85);
  point(387,150);
  point(340,139);
  point(380,185);
  pop();
  
  // House exterior making code
  //starting with the roof that is a ellipse
  push();
  ellipseMode (CENTER);
  fill (125);
  noStroke();
  ellipse (200,170,250,200);
  //now its time for the rectangle part of the house
  rectMode (CENTER);
  rect (200,250,250,170);
  pop();
  
  //House Door
  push();
  rectMode (CORNER);
  stroke(0);//color for both door and handle
  strokeWeight(2);//line width for both aswell
  fill(75);
  rect(115,250,50,85);
  // door handle
  ellipseMode (CORNER);
  noFill();
  ellipse (151,290,8);
  pop();
  
  //Windows first on top left
  push();
  rectMode (CENTER);
  fill (75);
  strokeWeight(2);//parmeters set for both rectangle and lines
  rect(140,170,60);
  //little detail for window
  line(110,170,170,170);//horizontal line
  line(140,200,140,140);//vertical line
  //now to duplicate & put on top right.
  rect(260,170,60);
  line(230,170,290,170);//horizontal line
  line(260,200,260,140);//vertical line
  //3rd window but this time near bottom right
  rect (250,280,90,60);
  line (205,280,295,280);//horizontal line
  line (234,250,234,310);//first vertical line
  line (266,250,266,310);//second vertical line
  pop();
  
}
