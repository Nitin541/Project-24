class Brick {
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            restitution: 0.8,
            density: 1,
            friction: 0.3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display (color) {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(color);
        noStroke();
        rect(pos.x, pos.y, this.width, this.height);
    }
}