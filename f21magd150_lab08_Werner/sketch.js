let mc, back;
let f1,f2;
let pdf;
let title = "Hunter Lost in the Woods";     
let t1= "Click Mouse to Save as PDF"; 
let speed= 5;
let x = 25;

function preload(){
  back =loadImage("Forest.jpg");              //both pictures
  mc = loadImage("Guardian.png");
  
  f1 = loadFont('ObelixPro-Broken-cyr.ttf');  //both fonts
  f2 = loadFont('Laffayette_Comic_Pro.ttf');
  
}

function setup() {
  createCanvas(600, 425);
  
  pdf= createPDF();    
  pdf.beginRecord();
  
  back.filter(BLUR,2);  //background picture
  image(back,0,0);
  
  mc.resize(75,0);      //hunter picture
  tint(171,111,247);
  image(mc,300,175);
}

function draw() {
  textFont(f1);        //modifiers for title
  fill ('#F91B25');
  textSize(30);
  textAlign(CENTER);
  text (title,width/2,75);
  
  textFont(f2);        //modifiers for PDF text
  fill ('#54A2EB');
  textSize(15);
  textAlign(LEFT);
  text (t1,x,height-25);
  
  
}

function mousePressed(){  //to save as pdf
  pdf.save();
}