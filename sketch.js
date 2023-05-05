
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane
var boddie1
var boddie2
var boddie3
var engine,world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var	 plane_options={
	isStatic: true
}

var boddie1_options={
	restitution: 0.5,
	frictionAir: 0.9 
}

var boddie2_options={
	restitution: 0.2,
	frictionAir: 1.2 
}

var boddie3_options={
	restitution: 0.8,
	frictionAir: 0.2 
}

plane = Bodies.rectangle(400,680,800,2,plane_options)
World.add(world,plane)

boddie1 = Bodies.circle(400,30,20,boddie1_options)
World.add(world,plane)

boddie2 = Bodies.rectangle(200,30,100,100,boddie2_options)
World.add(world,plane)

boddie3 = Bodies.rectangle(600,390,300,150,boddie3_options)
World.add(world,plane)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,127);
  Engine.update(engine)
  drawSprites();
 ellipse(boddie1.position.x, boddie1.position.y,20)
 rect(plane.position.x, plane.position.y,800,2)
 rect(boddie2.position.x, boddie2.position.y,100,100)
 rect(boddie3.position.x, boddie3.position.x,300,150)
}



