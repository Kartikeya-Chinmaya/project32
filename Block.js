class Block {
  constructor(x, y, width, height) {
    var options = {
        restitution:0.4,
        friction:0,
        density:1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    
    //console.log(this.Visibility)
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){

    var angle = this.body.angle;
    var pos =this.body.position;
   
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER); 
    //strokeWeight(1);
    //stroke("white");
    fill("lime");
    rect(0, 0, this.width, this.height);
    pop();      
      }

      else{
        
        World.remove(world,this.body);
     push();
        this.Visibility = this.Visibility-5;
        tint(255,this.Visibility);
        pop();
      }
  }

  score(){
    if(this.Visibility < 0 && this.Visibility > -10){
  
      score = score+1;
    }
  }
  

}
