class Ground{

  constructor(){
      var ground_options={
          isStatic : true
        }
      
        this.ground = Bodies.rectangle(450,560,18000,20,ground_options)
        World.add(world,this.ground);
  }
  display(){
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,18000,20);
  }

 

}