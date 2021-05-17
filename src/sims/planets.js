import { removeFromArray } from '../base/lib';
import { CanvasPlus } from '../base/canvasplus';


class Planet {

    /**
     * @constructor
     * @struct
     * @param {Universe} u The universe the planet belongs to
     * @param {number} m The mass
     * @param {number} x The x position
     * @param {number} y The y position
     * @param {number} vx The speed x
     * @param {number} vy The speed y
     */
    constructor(u, m, x, y, vx, vy) {
        /** @type {Universe} */
        this.u = u;
        /** @type {number} */
        this.m = m;

        //compute radius
        /** @type {number} */
        const r = this.r();

        //set position
        /** @type {number} */
        this.x = x < r ? r : x > u.w - r ? u.w - r : x;
        /** @type {number} */
        this.y = y < r ? r : y > u.h - r ? u.h - r : y;

        //set speed
        /** @type {number} */
        this.vx = vx;
        /** @type {number} */
        this.vy = vy;

    }

    /**
     * Update the force, based on the gravity of other planets.
     */
    observe() {

        /** @type {number} */
        this.fx = 0;
        /** @type {number} */
        this.fy = 0;

        //check all other planets in the universe
        for (let i = 0; i < this.u.ps.length; i++) {
            /** @type {Planet} */
            const p = this.u.ps[i];
            if (this == p) continue;

            //compute and add gravity force

            /** @type {number} */
            let d = this.d(p);
            if (d === 0) continue;

            d = d * d * d;
            this.fx += 0.01 * (p.x - this.x) * this.m * p.m / d;
            this.fy += 0.01 * (p.y - this.y) * this.m * p.m / d;
        }
    }

    /**
     * @param {Planet} p
     * @return {number} The distance to the planet p.
     */
    d(p) {
        /** @type {number} */
        var dx = p.x - this.x;
        /** @type {number} */
        var dy = p.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * @return {number} The radius of the planet, depending on its mass.
     */
    r() {
        return Math.sqrt(this.m / Math.PI);
    }

    /**
     */
    change() {

        //compute acceleration
        /** @type {number} */
        var ax = this.fx / this.m;
        /** @type {number} */
        var ay = this.fy / this.m;

        //compute new speed
        this.vx += ax * this.u.timeStepMs;
        this.vy += ay * this.u.timeStepMs;

        //compute new position
        this.x += this.vx * this.u.timeStepMs;
        this.y += this.vy * this.u.timeStepMs;

        //limit
        /*double r=r();
         if(x<r) { x=r; vx=-vx*e; }
         if(y<r) { y=r; vy=-vy*e; }
         if(x>u.w-r) { x=u.w-r; vx=-vx*e; }
         if(y>u.h-r) { y=u.h-r; vy=-vy*e; }*/
        if (this.x < 0) { this.x = this.u.w; }
        if (this.y < 0) { this.y = this.u.h; }
        if (this.x > this.u.w) { this.x = 0; }
        if (this.y > this.u.h) { this.y = 0; }
    }
}





class Universe {

    /**
 * @constructor
 * @struct
 * @param {number} w
 * @param {number} h
 * @param {number} timeStepMs
 */
    constructor(w, h, timeStepMs) {
        /** @type {number} */
        this.w = w;
        /** @type {number} */
        this.h = h;

        /** @type {number} */
        this.timeStepMs = timeStepMs;

        /** @type {Array.<Planet>} */
        this.ps = [];
    }


    /**
     * @param {number} nb
     * @param {number} mi
     * @param {number} minSpeed
     * @param {number} maxSpeed
     * @return {Universe}
     */
    fillRandomly(nb, mi, minSpeed, maxSpeed) {
        /** @type {Array.<Planet>} */
        this.ps = [];
        for (var i = 0; i < nb; i++) {
            var speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
            var angle = 2 * Math.random() * Math.PI;
            this.ps.push(new Planet(this, mi, this.w * Math.random(), this.h * Math.random(), speed * Math.cos(angle), speed * Math.sin(angle)));
        }
        return this;
    }

    /**
     */
    step() {
        /** @type {number} */
        var i;

        //observation
        for (i = 0; i < this.ps.length; i++)
            this.ps[i].observe();

        //action
        for (i = 0; i < this.ps.length; i++)
            this.ps[i].change();

        //collision detections
        /** @type {Array.<Planet>} */
        var agg = this.findCollision();
        while (agg !== null) {
            this.ps.push(this.aggregate(agg));
            removeFromArray(this.ps, agg[0]);
            removeFromArray(this.ps, agg[1]);
            agg = this.findCollision();
        }
    }

    /**
     * @return {Array.<Planet>}
     */
    findCollision() {
        //TODO use spatial index to boost collision detection
        for (var i = 0; i < this.ps.length; i++) {
            /** @type {Planet} */
            var pi = this.ps[i];
            for (var j = i + 1; j < this.ps.length; j++) {
                /** @type {Planet} */
                var pj = this.ps[j];
                /** @type {number} */
                var d1 = pi.d(pj);
                /** @type {number} */
                var d2 = pi.r() + pj.r();
                if (d1 > d2)
                    continue;
                return [pi, pj];
            }
        }
        return null;
    }

    /**
     * Aggregate planets, after collision.
     * 
     * @param {Array.<Planet>} agg
     */
    aggregate(agg) {
        /** @type {Planet} */
        var p1 = agg[0];
        /** @type {Planet} */
        var p2 = agg[1];
        /** @type {number} */
        var m = p1.m + p2.m;
        return new Planet(this,
            m,
            (p1.x * p1.m + p2.x * p2.m) / m,
            (p1.y * p1.m + p2.y * p2.m) / m,
            (p1.vx * p1.m + p2.vx * p2.m) / m,
            (p1.vy * p1.m + p2.vy * p2.m) / m
        );
    }


    /**
     * @param {number} nb
     * @param {CanvasPlus} cplus
     * @return {Universe}
     */
    start(nb, cplus) {
        var i = 0;
        var uni = this;
        var engine = function () {
            uni.step();
            cplus.redraw();
            if (nb > 0 && i++ > nb)
                return;
            setTimeout(engine, 0);
        };
        engine();
        return this;
    }
}





//entry point
export const planets = function (divId, canvasId, nb = 1000, mi = 0.5, minSpeed = 0, maxSpeed = 0.1) {

    var cdiv = document.getElementById(divId);
    /** @type {number} */
    var w = cdiv.offsetWidth;
    /** @type {number} */
    var h = cdiv.offsetHeight;

    /** @type {Universe} */
    var uni = new Universe(w, h, 10).fillRandomly(nb, mi, minSpeed, maxSpeed);

    /** @type {CanvasPlus} */
    var cplus = new CanvasPlus(canvasId, w, h);
    var ctx = cplus.getContext2D();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, w, h);

    cplus.redraw = function () {
        //ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, w, h);

        //display planets
        for (var i = 0; i < uni.ps.length; i++) {
            /** @type {Planet} */
            var p = uni.ps[i];
            var t = p.m / (nb * mi);
            ctx.fillStyle = "rgb(255,255," + Math.floor(255 * (1 - t)) + ")";
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r(), 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        }

        //label
        ctx.fillStyle = "rgb(200,200,200)";
        ctx.fillRect(0, 0, 65, 13);
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillText(uni.ps.length + " planets", 2, 10);
    };

    //start
    uni.start(-1, cplus);

}


         //TODO add restart/big bang button
/* Button restart = new Button("Recommencer!");
 restart.addClickHandler(new ClickHandler() {
 @Override
 public void onClick(ClickEvent event) {
 u.fill();
 c.getContext2d().setFillStyle(CssColor.make(0,0,0));
 c.getContext2d().fillRect(0, 0, w, h);
 }
 });
 RootPanel.get("b").add(restart);*/
