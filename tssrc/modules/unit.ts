// defold /scripts/unit.script

export class Unit {
    
    private rotationRadius = 100;    
    private phase = 0;    
    private startPos = vmath.vector3();
    private id: any = null;
    
    public update(dt: number) {
        if(this.id == null) return
        this.phase += dt
        let pos = vmath.vector3(this.startPos);
        pos.x += math.cos(this.phase) * this.rotationRadius
        pos.y += math.sin(this.phase) * this.rotationRadius
        pos.x = math.ceil(pos.x);
        pos.y = math.ceil(pos.y);
        go.set_position(pos, this.id);
    }

    public create() {
        this.phase = math.random()
        this.startPos.x = math.random(200, 800)
        this.startPos.y = math.random(200, 500)
        this.startPos.z = 0
        this.id = factory.create("/go#factory")
    }
}
