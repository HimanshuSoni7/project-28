const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mangoIMG;
var stone,stoneIMG;
var tree,treeIMG;
var boy,boyIMG;
var launcherObject;
var launchingForce=100;

function preload(){
 boyIMG=loadImage("boy.png");
}

function setup() {
	createCanvas(1360, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(680,640,1360,10);
	
	tree=new Tree(1100,635,50,50);

	mango1=new Mango(1050,160,30);
	mango2=new Mango(1000,220,35);
	mango3=new Mango(1200,210,27);
	mango4=new Mango(1250,230,30);
	mango5=new Mango(1150,140,30);
	mango6=new Mango(1100,280,30);

	stone=new Stone(240,480,30);

	launcherObject=new Launcher(stone.body,{x:235,y:480})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(173,216,230);

  image(boyIMG,200,410,200,300);
  
  ground.display();
  tree.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stone.display();
  launcherObject.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	launcherObject.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:480});
		launcherObject.attach(stone.body);
	}
}

