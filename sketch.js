
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, backSprite, containerPart1, containerPart2, containerPart3;
var edge1, edge2;

function setup() {
	createCanvas(800, 700);
	backSprite = createSprite(400,350, 800, 700);	
	backSprite.shapeColor = 'black';


	
	engine = Engine.create();
	world = engine.world;

	var paper_options = {
		isStatic: false,
		restitution: 0.5,
		density: 1.2,
		friction: 0.5
	}

	fill(255);
	paper = Bodies.circle(100, 600, 20, paper_options);
	World.add(world, paper);

	ground = Bodies.rectangle(400, 690, 800, 10, {isStatic: true});
	World.add(world, ground);

	containerPart1 = new Brick(600, 635, 10, 100);
	containerPart2 = new Brick(700, 635, 10, 100);
	containerPart3 = new Brick(650, 680, 100, 10);

	edge1 = new Brick(20, 350, 10, 700);
	edge2 = new Brick(780, 350, 10, 700);

	Engine.run(engine);
  
}


function draw() {
	
	background(0);
	
	Engine.update(engine);

	keyPressed();

	console.log(paper.position)

	ellipseMode(RADIUS);
	rectMode(CENTER);

	drawSprites();
	
	fill(255);

	ellipse(paper.position.x, paper.position.y, 20);

	fill('brown');

	rect(ground.position.x, ground.position.y, 800, 10);

	containerPart1.display('red');
	containerPart2.display('red');
	containerPart3.display('red');

	
}



function keyPressed() {
	if(keyDown(UP_ARROW) && paper.position.y > 500){
		Body.applyForce(paper, paper.position, {x: 0, y: -10});
	}
	if(keyDown(LEFT_ARROW) && paper.position.x > 100){
		Body.applyForce(paper, paper.position, {x: -10, y: 0});
	}
	if(keyDown(RIGHT_ARROW) && paper.position.x >= 100){
		Body.applyForce(paper, paper.position, {x: 10, y: 0});
	}
}