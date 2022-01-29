
class food {
    constructor(){
         this.foodStock=0;
         this.image=loadImage("Images/Milk.png");
    }
         getFoodStock(){
           return this.foodStock; 
         }

         updateFoodStock(){
           this.foodStock=foodStock;  
        }

        deductFoodStock(){
            this.foodStock=this.foodStock-1; 
        }
    
        display(){
            var x=70,y=120;

            imageMode(CENTER);
            image(this.image,500,500,70,70)

            if(this.foodStock!=0){
                for(var n=0;n<this.foodStock;n++){
                    if(n%10==0){
                      x=x+30;
                      y=y+60;
                    } 
                    image(this.image,x,y,50,50);
                      
                    
            }
        }
}
}