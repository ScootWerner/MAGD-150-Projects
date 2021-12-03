let capture;
let music;

function setup() {
  createCanvas(640, 240);
  capture = createCapture(VIDEO);
  music = createAudio(['cinematic-melody-main-9785.mp3']);
  capture.hide();      //ment to hide the extra camera
}

function draw() {  
  view();
  music.play();          //music is kinda of mysterious or complelling.

}

function view() {        // function for the dual cameras
  push();
  translate(width,0);
  scale(-1, 1);       // to make cameras viewpoint toward each other
  image(capture, 0, 0, 320, 240);
  filter(INVERT);     // to give second camera a creppy look 
  pop();

  image(capture,0,0,320,240)
}


