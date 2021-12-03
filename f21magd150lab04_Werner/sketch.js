var pressed =0;
var pressedState =0;
var pressedCrust = 0;

function setup() {
  createCanvas(400, 400);
  background (100);

}

function draw() {
}

//crust
function mousePressed(){
  if (pressedCrust==0){
    fill('#664229');
    ellipse (mouseX,mouseY,350);
    fill('#DC1500');
    ellipse (mouseX,mouseY,325);
  }
    pressed = pressed +1;
    pressedCrust = pressed /2
}

//cheese
function mouseDragged(){ 
  if (pressedState ==1) {
    fill('#F5E62D');
    noStroke();
    ellipse (mouseX,mouseY,75);
  }
  pressed = pressed +1;
  pressedState = pressed %2
}

//key presses
function keyTyped() {
  if (keyCode === 32) {
    background(100);
    pressedCrust = 0
  }
}

