class BaseClass
{

  constructor(xpos,ypos,radius)
  {
    var options={
        density: 1,
        friction: 1.2,
        restitution:0.7
    }

    this.body = Bodies.circle(xpos,ypos,radius/2,options);
    this.width = radius;
    this.height = radius;
    this.image = loadImage ("sprites/paper.png");
    World.add(world,this.body)
  }

  display()
  {
    var position = this.body.position;
    var angle = this.body.angle;
    push();
      imageMode(CENTER)
      translate(position.x,position.y);
      stroke("white");
      strokeWeight(3);
      rotate(angle)
      image(this.image,0,0,this.width,this.height)
      pop();
  }


}