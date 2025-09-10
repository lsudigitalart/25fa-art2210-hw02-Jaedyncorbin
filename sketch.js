function setup() {
  createCanvas(950, 642);
  background(4, 7, 57);

  noStroke();
  angleMode(DEGREES);
  
}
  
function draw() {
  console.log(mouseX, mouseY);

  fill(110, 0, 2);
  push()
  rotate(-1)
  rect(0, 0, innerWidth, 155);
  pop()

  push();
  rotate(-1)
  fill(0);
  rect(0, 140, innerWidth, 15);
  pop();

  push();
  rotate(-0.1)
  fill(0);
  rect(0, 105, innerWidth, 15);
  pop();

   push();
  rotate(-0.9)
  fill(0);
  rect(0, 60, innerWidth, 15);
  pop();

  fill(0); 
ellipse(300, 580, 500, 600); 


push();
rotate(15)
fill(0); 
//ellipse(600, 450, 700, 200); 
pop()


push()
rotate(-30)
fill(0);
ellipse(380, 850, 250, 400);
pop()

fill(0)
ellipse(940, 250, 100, 130);



































}
