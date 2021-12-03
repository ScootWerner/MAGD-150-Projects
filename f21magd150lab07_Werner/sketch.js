// you might have to run several times
// to get a good canvas or image

let leaf = [];
function setup() {
  createCanvas(500,500);
  for (let i = 0; i < 1000; i++) {
    leaf.push(new Leaves());
  }
}

function draw() {
  background('#3BAD52');
  for (let i = 0; i < leaf.length; i++) {
    leaf[i].vis();
  }
}

class Leaves{
  constructor() {
    this.x= random(-width/3,width/3);        //random x of leaf
    this.y= random(-height/3,height/3);      //random y of leaf
    this.r= random(0,360);                   // random rotation
    this.colorPick = ['#E8B125','#F27124','#F2A427','#DB832F','#F26B27','#E84A25']
    this.c= random(this.colorPick);          //color values
    angleMode(DEGREES);
  }
  
  vis() {
    translate (this.x,this.y);       // random position for leaf.
    rotate (this.r);
  
    push();                // leaf
    fill(this.c);
    triangle (0,-25,25,0,-25,0);
    arc (0,0,50,60,310,230,PIE);
    pop();
  
    strokeWeight(1.5);    // lines on the leaf.
    line(0,-25,0,50);
    line(0,12,18,-5);
    line(0,12,-18,-5);
    line(0,25,18,10);
    line(0,25,-18,10);
  }
}
 