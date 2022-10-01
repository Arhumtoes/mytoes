var box;

function setup() {
  createCanvas(400,400);
box=createSprite(150,200,50,50)
box.shapeColor="green"
}

function draw() 
{
   background(30);
if(keyDown("right")){
box.x=box.x+10
}
if(keyDown("left")){
  box.x=box.x-10
  



}
if(keyDown("up")){
  box.y=box.y-10
}
  if(keyDown("down")){ 
    box.y=box.y+10
  }

 drawSprites()
  }

//all the main coding scripts or main codes r written here in sketch.js
//js=javascript

//index.html= here you declare all the files that will be used for your coding
//p5 files= They are library files that contains the details of all the functions used in Javascript
//style.css= all the stylings and beautifying thingsd are written here