var china = []; 
var x = 50;
var y = 30;
var z = 100;


function setup() {
  createCanvas(600,400);
  for (var i=0; i<50; i++) {
    china.push(new massProduction());
  }
}

function draw() {
  background(23,9,67);
  dback();
  
  for (var i=0; i<china.length; i++) {
    china[i].move();
    china[i].display();
  }
  
   for(var z = 0; z <=500; z = z + 20){
   stroke(255);
   fill(165,100,50);
    ellipse(z,40,70,70);
   }
  
  fill(20,255,20);
  ellipse(y,160,40,40);
  
  
  noStroke();
  fill(255,20,3);
  y++;
  ellipse( x, y, 80, 80);
  
  
  
  
  
}

function dback(){
  if(mouseIsPressed){
    background(75,23,91);
  }
}

function massProduction() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    stroke(0,0,250);
    fill(255,30,9);
    rect(this.x, this.y, this.diameter, this.diameter);
  };
}