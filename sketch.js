const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine

var world

var FBI

var cop

var theif

var room

var bg

function preload(){
room = loadImage("images/Room.png")




}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 0;

    bg=new Room(displayWidth/2,displayHeight/2,1280,1024)

FBI=new Agent(500,360,200,200)

cop=new Cop(500,770,200,200)

theif=new Theif(100,780,200,200)

console.log(displayWidth)
console.log(displayHeight)

}




function draw(){
background(0)
Engine.update(engine)

bg.display();
FBI.display();
cop.display();
theif.display();    
}

function keyPressed(){

if(keyCode === LEFT_ARROW){
console.log(theif)

theif.body.position.x = theif.body.position.x+5
//theif.body.position.y = theif.body.position.y-1


}




}