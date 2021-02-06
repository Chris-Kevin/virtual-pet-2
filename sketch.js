var database;
var doghappy11,doghappy22;
var doghappy1;
var FoodStock,FoodS;
var milk,milk1;
var foodObj;
var fedTime;
var feed,addfood;
function preload()
{
	//load images here
doghappy11 = loadImage("images/dogImg.png");
doghappy22 = loadImage("images/dogImg1.png");
milk1= loadImage("images/milk.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  //console.log(firebase);
  doghappy1 = createSprite(300,200,20,20);
  doghappy1.addImage(doghappy11);
  doghappy1.scale = 0.2;  

  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(FeedDog);

  addfood = createButton  ("add Food");
  addfood.position(800,95);
  addfood.mousePressed(addfoods);

FoodStock = database.ref('Food');
FoodStock.on("value",readStock,showError)

  
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  doghappy1.addImage(doghappy22);
  writeStock(FoodS);
  
}

  drawSprites();
  //add styles here
  fill("red")
text(FoodS,400,80);
/*fill("dark grey")
text("press up arrow to feed drago",325,50);*/


}

function readStock(data){
  FoodS = data.val();
}
  function writeStock(x){
    if(x<0){
  
      x = 0;
    }
    else {
    x = x-1;
    
    }
   database.ref('/').update({
  Food:x
  
  
    })
  }
  
  function showError(){
    console.log("Error in writing to the database");
  } 
  function FeedDog(){
    doghappy1.addImage(doghappy22);
    FoodS--;
    //foodObj.updateFoodStock(foodObj.getFoodStock()-1) ;
    database.ref('/').update({
      Food:foodObj.getFoodStock(),
      fedTime:hour()
    })

  }
  function addfoods(){
    FoodS++;
    database.ref('/').update({
  
      Food:FoodS
    })
  }
  

