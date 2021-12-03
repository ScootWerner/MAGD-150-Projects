function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  //Time to make a planet
  //Start with shape behind actuall planet for later
  push();
  fill('#008ab7');
  noStroke();
  quad(100,25,300,25,300,375,100,375);
  quad(25,125,375,125,375,275,25,275);
  pop();
  //now for the land of the planet
  beginShape();
    fill(65,194,44);
    vertex(25,125);
    vertex(100,25);
    vertex(300,25);
    vertex(375,125);
    vertex(375,275);
    vertex(300,375);
    vertex(100,375);
    vertex(25,275);
  //add hole to the planet so there is water
    beginContour();
      vertex(150,100);
      vertex(75,140);
      vertex(25,150);
      vertex(25,250);
      vertex(150,275);
      vertex(200,375);
      vertex(250,375);
      vertex(325,225);
      vertex(265,25);
      vertex(125,25);
    endContour();
  endShape(CLOSE);
  //adding like a desert in the middle
  push();
  fill('#FFCE6B');
  triangle(200,125,250,225,100,200);
  pop();
  //going to add a shadow effect like the moon
  push();
  colorMode(HSB,360,100,100,100);
  fill(0,38,0,80);
  arc(275,200,250,400,QUARTER_PI,-QUARTER_PI,OPEN)
  pop();
}