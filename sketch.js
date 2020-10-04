
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var box1,box2,box3;
function preload()
{
	Img = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);

    greenBox = createSprite(1180,600,860,30);
    greenBox.addImage(Img);
    greenBox.scale = 0.70;

    
  engine = Engine.create();		
  world = engine.world;
  ground = new ground(800,height,1600,20)
  ball = new Ball(200,450,40);

  stroke("white");
  box1=new Box(1280,590,20,200);
	box2=new Box(1080,590,20,200);
	//box3=new Box(1190,690,200,5);


	
	Engine.run(engine);
} 


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("white");
  drawSprites();
  ground.display();
  greenBox.display();
  
  ball.display();
  box1.display();
  box2.display();
  //box3.display();



 

}

function keyPressed() {

   if(keyCode === UP_ARROW) {
	  
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
   }

}

