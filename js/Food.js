class Food{
constructor(){




}
getFoodStock(){
var FoodStockRef = database.ref('Food');
FoodStockRef.on("value",function(){
FoodStock = data.val();
});

}
update(count){
database.ref('/').update({
FoodStock:count
});
}
display(){
    var x = 80,y = 100;

    imageMode(CENTER);
    image(milk1,720,220,70,70);
    if(this.FoodStock!=0){
for(var i = 0;i<this.FoodStock;i++){
if(1%10==0){
x = 80
y = y+50;
}
image(milk1,x,y,50,50);
x = x+30;
}
    }
    
}
}