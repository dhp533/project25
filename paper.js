class Paper extends BaseClass
{
    constructor (xpos, ypos, radius)
    {
        super(xpos, ypos, radius);
        this.image = loadImage ("paper.png");   
     }
     display()
         {
          var position = this.body.position;
          super.display();
         }
     
    }