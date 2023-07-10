class Ball
{
    constructor(x, y, r)
    {
        let options = {
            restitution:0.5
        }
        this.body = Bodies.circle(x, y, r, options)
        this.r = r
        World.add(world, this.body);
    }

    show()
    {
        var pos = this.body.position
        push()
        ellipseMode(RADIUS)
        stroke("red")
        fill("red")
        ellipse(pos.x, pos.y, this.r)
    }

}