export class Planet {

    /**
     * @constructor
     * @struct
     * @param {Universe} u The universe the planet belongs to.
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
            if (this == p)
                continue;

            //compute and add gravity force
            /** @type {number} */
            let d = this.d(p);
            if (d === 0)
                continue;

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
        const dx = p.x - this.x;
        /** @type {number} */
        const dy = p.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * @return {number} The radius of the planet, depending on its mass.
     */
    r() {
        return Math.sqrt(this.m / Math.PI);
    }

    /**
     * @param {boolean} bounce
     */
    change(bounce) {

        //compute acceleration
        /** @type {number} */
        const ax = this.fx / this.m;
        /** @type {number} */
        const ay = this.fy / this.m;

        //compute new speed
        this.vx += ax * this.u.timeStepMs;
        this.vy += ay * this.u.timeStepMs;

        //compute new position
        this.x += this.vx * this.u.timeStepMs;
        this.y += this.vy * this.u.timeStepMs;

        //limit
        if(bounce) {
            const r = this.r();
            const e = 1;
            if(this.x<r) { this.x=r; this.vx=-this.vx*e; }
            if(this.y<r) { this.y=r; this.vy=-this.vy*e; }
            if(this.x>this.u.w-r) { this.x=this.u.w-r; this.vx=-this.vx*e; }
            if(this.y>this.u.h-r) { this.y=this.u.h-r; this.vy=-this.vy*e; }
        } else {
            if (this.x < 0) { this.x = this.u.w; }
            if (this.y < 0) { this.y = this.u.h; }
            if (this.x > this.u.w) { this.x = 0; }
            if (this.y > this.u.h) { this.y = 0; }
        }
    }
}
