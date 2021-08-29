
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject	
var paper
var engine, world;

var paperball

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	
	groundObject = new ground(width/2,670,width,20);
	dustbinObj = new dustbin(1200,650);
	paperball = new Paper (200, 0, 60)
	Engine.run(engine);
  
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperball.body, paperball.body.position, {x:210, y:-150})
	}
}
function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
 
  paperball.display();
  
  groundObject.display();
  dustbinObj.display();
  
  drawSprites();
}

