var dog,dogImage,happyDogImage,database,foods,foodStock;

function preload()

{
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/happydogImg.png");
  
  
  //load images here

function setup() {
	createCanvas(500,500);
  database = firebase.database.ref();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  foodStock.set(20);

  


function  
brush 
  dog = creatSprite(250,350,10,60);
  dog.addImage(dogImage); 

  dog.scale = 0.2;



function draw() {  
   
background("green");

if(foodS!==undefined){
  textSize(20);
  Fill(255);
  text(" Press up arrow to feed ",50,50)
text("food Remaining:"+food5,150,150);


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  
  dog.addImage(happyDogImage);
}    

if (condition) {
  
} else {
  
}



if(keyWentUp(UP_ARROW)){
  dog.addImage(dogImage);
}


if(foodS === 0){
  foodS = 20;

}


drawSprites();
   }
}


function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x=x-1;
  }

database.ref('/').update({
Food:x





});
}


function readStock(data){
  foodS = data.val();











































