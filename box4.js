  class Box4 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.5,
          friction:1,
          density:0.03
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.color = "#808080"
      this.width = width;
      this.height = height;
      this.visibility = 255
      World.add(world, this.body);
    }
    display(){
          push()
          translate(this.body.position.x, this.body.position.y);
          if(this.body.speed < 3){
            rectMode(CENTER);
            fill (this.color)
            rect(0, 0, this.width, this.height);
          }
          else {
            World.remove(world, this.body)
            push ();
            this.visibility = this.visibility-5
            tint(255, this.visibility)
            rect (this.body.position.x, this.body.position.y, 50, 50)
      
            pop()
          }
          pop()
          
    }
    score(){
      if(this.visibility<0&&this.visibility>-105){
        score++
      }
    }
  };
  
  
  