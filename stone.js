class Stone {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          restitution:0.8,
          friction:0.3,
          density:1.0
      }
      this.body = Bodies.circle(x, y, r/2, options);
      this.r=r;
      this.image=loadImage("stone.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0,0,this.r*2, this.r*2)
      rectMode(CENTER);
      fill(255);
      ellipseMode(RADIUS);
      pop();
    }
  };
  