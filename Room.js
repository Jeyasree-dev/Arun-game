class Room{

constructor(x,y,width,height){

    var options = {
        isStatic: true
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image = loadImage("images/Room.png")  
    this.width = width;
      this.height = height;
      World.add(world, this.body);




}


display(){
push();    
imageMode(CENTER)
image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
pop();
}



}