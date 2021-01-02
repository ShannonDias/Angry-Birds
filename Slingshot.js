class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.img1 = loadImage ('sprites/sling1.png')
        this.img2 = loadImage ('sprites/sling2.png')
        this.img3 = loadImage ('sprites/sling3.png')

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.img1,250,20)
        image(this.img2,225,20)
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48,22,8);
            if(pointA.x <200 ) {
            strokeWeight(4);
            line(pointA.x -10, pointA.y +10 , pointB.x-10 ,pointB.y +10);
            line(pointA.x -10, pointA.y +10 , pointB.x+30 ,pointB.y +5);
            image(this.img3,pointA.x -20 ,pointA.y -10, 15, 30)
           }else{
            strokeWeight(6);
            line(pointA.x -10, pointA.y +10 , pointB.x-10 ,pointB.y +10);
            line(pointA.x -10, pointA.y +10 , pointB.x+30 ,pointB.y +5);
            image(this.img3,pointA.x -20 ,pointA.y -10, 15, 30)
           }
            pop()
        }
    }
    
}