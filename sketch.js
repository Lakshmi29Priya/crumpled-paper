
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObject,groundObject	
var world;
var dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin1=new dustbin(930,670,300,15);
	dustbin2=new dustbin(780,630,15,100,{isStatic:false});
	dustbin3=new dustbin(1080,630,15,100)
	paperObject=new paper(200,643,40);
	groundObject=new ground(width/2,670,width,10);
	//Create a Ground
	

	//var render = Render.create({
	  //element: document.body,
	  //engine: engine,
	  //options: {
	    //width: 1200,
	    //height: 700,
	    //wireframes: false
	  //}
	//});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbin1.display();
  paperObject.display();
  groundObject.display();
  dustbin2.display();
 dustbin3.display();
  

 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:40,y:-90});
    
  	}
}





