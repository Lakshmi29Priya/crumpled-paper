class dustbin {
    constructor(x, y, width, height) {
      var options = {
        isStatic:false, 
        'restitution':0.5,
          'friction':2.0,
          'density':1.2
		}
		this.angle=0;
      this.body = Bodies.rectangle(x, y,width, height, options);
     this.x=x;
     this.y=y;
      this.width = width;
      this.height = height;
    //  World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     pos.x=this.x;
     pos.y=this.y;
     var angle=this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(0.5);
      stroke("green");
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };