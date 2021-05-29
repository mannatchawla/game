const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var backgroundImg;

function preload() {
  backgroundImg = loadImage("background.jpg");
}

function setup(){
  var canvas = createCanvas(1350,650);
  engine = Engine.create();
  world = engine.world;


}
function draw(){
  background(backgroundImg)
  Engine.update(engine);
  

}