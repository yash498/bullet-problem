var bullet,wall;
var speed,weight;
var thickness,damage;


function setup() {
  createCanvas(1600,400);
 speed=random(223,321);
 weight=random(30,52);
 bullet=createSprite(50,200,50,50);
 bullet.shapeColor="white";
 wall=createSprite(800,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);
 thickness=random(22,83);
}



function draw() {
  background(255,255,255);  

bullet.velocityX=speed;

if (hascollided(wall,bullet)){  
bullet.velocityX=0;
var damage=0.5 * weight*speed*speed/(thickness*thickness*thickness);
if (damage>10) { 

bullet.shapeColor=color(255,0,0); 
}
if (damage<10){ 

bullet.shapeColor=color(0,255,0);


}



}

}



hascollided();

  drawSprites();

function hascollided(bullet,wall) {  
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge){
{
  return true;
}










}





}
















