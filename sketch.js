
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		destiny:1.2
	}


	ball=Bodies.circle(200,200,30,ball_options);
	World.add(world,ball);




	//Create the Bodies Here.
	ground= new Ground(400,390,800,20);
	left= new Ground(550,337,10,90);
	right= new Ground(700,337,10,90);

	Engine.run(engine);
  
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:-0.1});
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,10);
  drawSprites();
 
}



