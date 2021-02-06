
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var roof, chain1, chain2, chain3, chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(650, 500);


	engine = Engine.create();
	world = engine.world;

	bob1 = new BOB(200,200,50);
	bob2 = new BOB(250,200,50);
	bob3 = new BOB(300,200,50);
	bob4 = new BOB(350,200,50);
	bob5 = new BOB(400,200,50);
	roof = new Roof(310,200,300,20);
	chain1 = new Rope(bob1.body, {x:200, y:200});
	chain2 = new Rope(bob2.body, {x:250, y:200});
	chain3 = new Rope(bob3.body, {x:300, y:200});
	chain4 = new Rope(bob4.body, {x:350, y:200});
	chain5 = new Rope(bob5.body, {x:400, y:200});
    
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:85,y:-85});
  
	}
}



