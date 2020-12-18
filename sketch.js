const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world
function setup(){
    createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(100,400,50,50);
    slingshot = new SlingShot(ball.body,{x:100, y:10});
    ground = new Ground(300,550,600,30);
    box1 = new Block(300,540,50,50);
    box2 = new Block(300,490,50,50);
    box3 = new Block(300,440,50,50);
    box4 = new Block(300,390,50,50);
    box5 = new Block(300,340,50,50);
    box6 = new Block(400,340,50,50);
    box7 = new Block(400,390,50,50);
    box8 = new Block(400,440,50,50);
    box9 = new Block(400,490,50,50);
    box10 = new Block(400,540,50,50);
    box11 = new Block(500,340,50,50);
    box12 = new Block(500,390,50,50);
    box13 = new Block(500,440,50,50);
    box14 = new Block(500,490,50,50);
    box15 = new Block(500,540,50,50);


}
 function draw(){
     Engine.update(engine);
     background("orange");
     ball.display();
     slingshot.display();
     ground.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
 }
 function mouseDragged(){
     Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
 }