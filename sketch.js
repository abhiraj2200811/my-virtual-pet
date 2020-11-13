//Create variables here
var dog_sit,dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog_sit = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(1500, 1000);
  
  dog = createSprite(500,500,50,50)
  dog.addImage(dog_sit);

  database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock)

}


function draw() {  

background(46,139,87)

if(keyWentDown(UP_ARROW)){

writeStock(foodS);
dog.addImage(happyDog);


}

  drawSprites();
  //add styles here

  textSize="35"
  fill("white")
  stroke(5)

  text("Press Up Arrow key to feed Woody Milk.", 240, 200 )

  

}

function readStock(data){

foodS=data.val();

}

function writeStock(x){

if(x<=0){

  x=0;

}else{

x=x-1;

}

database.ref('/').update({
  Food:x
})

}