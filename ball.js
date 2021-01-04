class paper
{
  constructor(xpos,ypos,radius)
  {     
      var options={
          isStatic:false,
          resitution:0.3,
          density:0.5
      }

    this.radius = radius  
    this.ball = Bodies.circle(xpos,ypos,radius,options);

    World.add(world,this.ball)

    this.image = loadImage("paper.png");

  }
  

  display()
  {

    
    // ellipse(this.ball.position.x,this.ball.position.y,this.radius);
   
    image(this.image,this.body.position.x,600,300,200);
    imageMode(CENTER);
    
   
  
  }

    
    
}