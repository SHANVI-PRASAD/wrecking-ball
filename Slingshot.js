class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 400
        }
       
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   

    display(){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            strokeWeight(10);
            line(pointA.x, pointA.y-50, pointB.x, pointB.y)
           
            
            pop();
        }
    }
    
