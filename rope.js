class rope { 
    constructor(b1,b2,point){
        var options = {
            bodyA:b1,
            bodyB:b2,
            length:200,
            stiffness:1
        }
     this.Body = Matter.Constraint.create(options);
     this.point = point;5
    World.add(world, this.Body);

    }

    display(){
    
    line(this.Body.bodyA.position.x , this.Body.bodyA.position.y , this.Body.bodyB.position.x + this.point, this.Body.bodyB.position.y);

    }
}