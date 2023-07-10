const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
//var ball;
var ball1;
var buttonRight;


function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
var ballOptions = {restitution: 0.01}
  ball1 = Bodies.circle(70, 70, 10, ballOptions)
  ground =new Ground(width/2,670, width,20);
  right = new Ground(500,600,20,120);
  left = new Ground(700, 600, 20, 120);
//  ball = new Ball(50, 50, 10)
  World.add(world,ball1);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  ground.show();
  left.show();
  right.show();

  ellipse(ball1.position.x, ball1.position.y, 20)
  Engine.update(engine);
}


function keyPressed()
{
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1, {x:0,y:0},{x:0,y:-0.01})
	}
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1, {x:0,y:0},{x:0.01,y:-0.01})
	}
}