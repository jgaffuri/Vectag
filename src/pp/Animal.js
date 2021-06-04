//@ts-check

export class Animal {


    constructor(type, l, x = 0, y = 0) {

        //TODO move?
        Animal.PREY = 0
        Animal.PREDATOR = 1

        this.type = type;
        this.l = l;

        //position
        this.x = x < 0 ? 0 : x > l.w ? l.w : x
        this.y = y < 0 ? 0 : y > l.h ? l.h : y

        //speed
        this.vx = 0
        this.vy = 0;

        //? the ones around ?
        this.predators = []
        this.preys = []

        //add to the spatial index
        l.grid.add(this, this.x, this.y);
    }

    /** Distance to another animal */
    d(a) {
        return Math.hypot((a.x - this.x), (a.y - this.y));
    }

    /** Move */
    move() {
        const l = this.l
        l.grid.remove(this, this.x, this.y);

        const angle = Math.random() * 2 * Math.PI;
        const r = 0.01 * Math.random();

        this.vx += r * Math.cos(angle) * l.timeStepMs;
        this.vx = this.vx > l.V_MAX ? l.V_MAX : this.vx < -l.V_MAX ? -l.V_MAX : this.vx

        this.vy += r * Math.sin(angle) * l.timeStepMs;
        this.vy = this.vy > l.V_MAX ? l.V_MAX : this.vy < -l.V_MAX ? -l.V_MAX : this.vy

        this.x += this.vx * l.timeStepMs;
        this.x = this.x < 0 ? l.w : this.x > l.w ? 0 : this.x

        this.y += this.vy * l.timeStepMs;
        this.y = this.y < 0 ? l.h : this.y > l.h ? 0 : this.y

        l.grid.add(this, this.x, this.y);
    }


    /** Observe */
    observe() {
        const l = this.l

        //get animals around
        const as = l.grid.get(this.x - l.d, this.y - l.d, this.x + l.d, this.y + l.d);

        this.preys = [];
        this.predators = [];

        for (let a of as) {
            if (a == this) continue;
            if (this.d(a) > l.d) continue;
            if (a.type == Animal.PREY)
                this.preys.push(a);
            else
                this.predators.push(a);
        }
    }

    makeChild() {
        //do better: make child around
        return new Animal(this.type, this.l, this.x, this.y);
    }


    /** display animal */
    display(cp, fillStyle = "blue", size = 2) {
        const s = size / cp.ps
        cp.c2d.fillStyle = fillStyle;
        cp.c2d.fillRect(cp.geoToPixX(this.x), cp.geoToPixY(this.y), s, s);
        /*c2.beginPath();
        c2.arc(a.x, a.y, 0.5, 0, 2*Math.PI);
        c2.closePath();
        c2.fill();*/
    }


}
