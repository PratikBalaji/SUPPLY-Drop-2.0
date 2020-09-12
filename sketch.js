var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1;
var s1,s2;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	b1 = createSprite(width/2,height-45, 200,20);
	s1 = createSprite(290,615,20,100);
	s2 = createSprite(510,615,20,100);
	b1.shapeColor=color(255,0,0);
	s1.shapeColor=color(255,0,0);
    s2.shapeColor=color(255,0,0);
	
	console.log(packageBody);

	engine = Engine.create();
	world = engine.world;

	
	b1 = Bodies.rectangle(width/2,640, 200,20, {isStatic:true});
	World.add(world, b1);
	s1 = Bodies.rectangle(290,630,20,100,{isStatic:true});
	World.add(world, s1);
	s2 = Bodies.rectangle(510,630,20,100,{isStatic:true});
	World.add(world, s2);

	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  b1.x = b1.position.x
  s1.x = s1.position.x
  s2.x = s2.position.x

  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



