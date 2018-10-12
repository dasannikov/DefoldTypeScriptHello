export class Unit {
    
    private static randRadius = 100;    
    private id: hash;
    
    public static testStatic(a: number) {
        print("Hello static. a = " + a)
    }

    public init() {
        let startPos = vmath.vector3()
        startPos.x = math.random(-Unit.randRadius + 600, Unit.randRadius + 600)
        startPos.y = math.random(-Unit.randRadius + 300, Unit.randRadius + 300)
        startPos.z = 0
        this.id = factory.create("/main#factory")
        go.set_position(startPos, this.id);
        go.animate(this.id, 'position.x', go.PLAYBACK_LOOP_FORWARD, 100, go.EASING_LINEAR, 1)
    }
}
