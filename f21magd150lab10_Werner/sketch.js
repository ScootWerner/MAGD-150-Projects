function setup() {
  createCanvas(640,400,WEBGL);   //used this number becuase of bacground picture size.
  angleMode(DEGREES);            //used for rotating boxes.
}

function preload() {
  img1= loadImage('space.jpg');
}

function draw() {
  background(0);
  
  orbitControl();        //the user has control over camera perspective
  Lights();              //have to set lights before objects
  Objects();
  
}

function Objects() {
  push();
  noStroke();
  texture(img1);         //used for plane and has same texture on back
  plane(640,400);
  pop();
  
  push();
  noStroke();
  ambientMaterial(148,250,226);  //used on planet to reflect a turquoise color
  translate(175,100);
  sphere(35);
  pop();
  
  push();                      //this object and the next one create the x
  noStroke();
  translate(-175,-75);
  rotate(45)
  ambientMaterial(250,0,0);
  box(15,75,20);
  pop();
  
  push();
  noStroke();
  translate(-175,-75);
  rotate(-45)
  ambientMaterial(250,0,0);
  box(15,75,20);
  pop();
}

function Lights() {
  //a point light that follows the mouse x and y position
  pointLight(255,255,255,mouseX,mouseY,100);
  //need an ambinet light so that the x and sphere can have color.
  ambientLight(100);


  
}