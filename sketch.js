var sword,swordImg
var fruitImg
var fruitGroup
var score

function preload(){
swordImg=loadImage("sword.jpg")
fruitImg=loadImage("apple.webp")
}
function setup() 
{
  createCanvas(400,400);

  sword=createSprite(200,350,20,20);
  sword.addImage(swordImg)
  sword.scale=0.01

  fruitGroup=createGroup()

  score=0
}

function draw() 
{
background("white");

text ("Score :"+score,350,50)

sword.x=mouseX

if(fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach()

  score=score+5
}

createFruit()
drawSprites()

}

function createFruit(){
  if(frameCount%100==0){
    var fruit=createSprite(Math.round(random(10,390)),0)
    fruit.velocityY=+2
    fruit.addImage(fruitImg)
    fruit.scale=0.05
    fruitGroup.add(fruit)
  }
}

