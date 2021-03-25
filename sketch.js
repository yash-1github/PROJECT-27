
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground ; 


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	ground = Bodies.rectangle(width/2, 60, width, 20 , {isStatic:true} );
	 World.add(world, ground);
  bob1 = new Bob(200,300,50);
  rope1 = new rope(bob1.body , this.ground, 0);
  bob2 = new Bob(300,300,50);
  rope2 = new rope(bob2.body, this.ground, 100);
  bob3 = new Bob(400,300,50);
  rope3 = new rope(bob3.body , this.ground, 200);
  bob4 = new Bob(600,300,50);
  rope4 = new rope(bob4.body , this.ground, 300);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
    Engine.update(engine);

    bob1.display(); 
    rope1.display();
    bob2.display(); 
    rope2.display();
    bob3.display(); 
    rope3.display();
    bob4.display(); 
    rope4.display();

  rect(ground.position.x, ground.position.y, width , 20);
  
  drawSprites();
 
}



