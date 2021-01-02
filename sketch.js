const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,box1,box2;
var engine,world;
function setup(){
    createCanvas(1500,600);
    engine=Engine.create();
    world=engine.world;
    ground1=new ground(40,490,1400,20);
    ball=new Ball(200,200,20,20);
    string=new String(ball.body,{x:200,y:40});
   
    box1=new Box(490,300,20,20);
    box2=new Box(490,280,20,20);
    box3=new Box(490,260,20,20);
    box4=new Box(490,240,20,20);
    box5=new Box(490,220,20,20);
    box6=new Box(510,220,20,20);
      box7=new Box(510,240,20,20);
      box8=new Box(510,260,20,20);
      box9=new Box(510,280,20,20);
    box10=new Box(510,300,20,20);
      box11=new Box(510,320,20,20);
     box12=new Box(490,320,20,20);
     box13=new Box(530,220,20,20);
     box14=new Box(530,240,20,20);
     box15=new Box(530,260,20,20);
     box16=new Box(530,280,20,20);
     box17=new Box(530,300,20,20);
     box18=new Box(530,320,20,20);

}
function draw(){
background("green");
    ground1.display();
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
    box16.display();
    box17.display();
    box18.display();


    ball.display();
    string.display();
  
    
}
function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}














