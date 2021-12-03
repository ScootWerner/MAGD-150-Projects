var s = 1;  //switch variable
var movetoggle =0;  //toggle variable between forms
var x,z ;       //x movement and size of pac

function setup() {
  createCanvas(600, 300);
  ellipseMode (CENTER);
  angleMode(DEGREES);
  speed = 3; // speed of pac
  x = 30;    // where pac starts on x axis
  z=50;      // how big pac starts at
}

function draw() {
  background(100);
  translate (0,height/2);//made center of canvas y the y axis center
  frameRate(15); //slowed down framrate so animation is more visable
    
  movement();
  
}

// pac with open mouth
function pacOpen(x,z) {
  fill ('#F2EF24');
  arc (x,0,z,z,60,300,PIE);
}

//pac mouth open halfway
function pacMid(x,z) {
  fill ('#F2EF24');
  arc (x,0,z,z,40,320,PIE);
}

//pac mouth closed
function pacClosed(x,z) {
  fill ('#F2EF24');
  ellipse (x,0,z,z);
}

//code to make pac move forward and switch between forms
function movement() {
  
  if (movetoggle==0){          //first frame switch
    pacOpen(x,z);
    s = s+1;
  }else if (movetoggle ==1){   //second frame switch
    pacClosed(x,z);
    s= s+1;
  }else if (movetoggle ==2){  //third frame switch
    pacMid(x,z);
    s= s+1;
  }
  movetoggle = s%3;    //toggle that actually switches between forms
  
  x += speed;           //speed that pac goes
  z ++;                 // size that pac increases
}