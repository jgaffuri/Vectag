//@ts-check
import { Universe } from "./Universe";
import { GeoViewer } from "../base/GeoViewer"
import { AgentPoint } from "../base/AgentPoint";

export class Planet extends AgentPoint {

    /**
     * @constructor
     * @param {Universe} u The universe the planet belongs to.
     * @param {number} m The mass
     * @param {number} x The x position
     * @param {number} y The y position
     * @param {number} sx The speed x
     * @param {number} sy The speed y
     */
    constructor(u, m, x, y, sx = 0, sy = 0) {

        //
        super(x, y, sx, sy)

        /** @type {Universe} */
        this.u = u;
        u.ps.push(this)

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

        //acceleration
        /** @type {number} */
        this.ax = 0;
        /** @type {number} */
        this.ay = 0;
    }

    /**
     * Update the force, based on the gravity of other planets.
     * @param {number} exponent
     */
    observe(exponent) {

        //compute gravity field at planet location
        const g = this.u.getGravityField(this.x, this.y, this, exponent);

        //set acceleration
        /** @type {number} */
        this.ax = g.gx;
        /** @type {number} */
        this.ay = g.gy;
    }


    /**
     * @return {number} The radius of the planet, depending on its mass.
     */
    r() {
        return Math.pow(this.m / Math.PI, 0.5);
    }


    /**
     * 
     * @param {boolean} bounce 
     * @param {number} maxSpeed 
     * @param {number} timeStepMs 
     */
    change(bounce = false, maxSpeed = 0.8, timeStepMs = 10) {

        //compute new speed
        this.sx += this.ax * timeStepMs;
        this.sy += this.ay * timeStepMs;

        //check vmax
        if (maxSpeed > 0) {
            /** @type {number} */
            const v = Math.sqrt(this.sx * this.sx + this.sy * this.sy);
            if (v > maxSpeed) {
                this.sx = maxSpeed * this.sx / v;
                this.sy = maxSpeed * this.sy / v;
            }
        }

        //compute new position
        /** @type {number} */
        let nx = this.x + this.sx * timeStepMs;
        /** @type {number} */
        let ny = this.y + this.sy * timeStepMs;

        //handle position limit
        if (bounce) {
            const r = this.r();
            const e = 1;
            if (nx < r) { nx = r; this.sx = -this.sx * e; }
            if (ny < r) { ny = r; this.sy = -this.sy * e; }
            if (nx > this.u.w - r) { nx = this.u.w - r; this.sx = -this.sx * e; }
            if (ny > this.u.h - r) { ny = this.u.h - r; this.sy = -this.sy * e; }
        } else {
            if (nx < 0) { nx = this.u.w; }
            if (ny < 0) { ny = this.u.h; }
            if (nx > this.u.w) { nx = 0; }
            if (ny > this.u.h) { ny = 0; }
        }

        //move
        this.x = nx;
        this.y = ny;
    }


    /**
     * Display planet
     * 
     * @param {GeoViewer} cp 
     * @param {String} fillStyle 
     */
    display(cp, fillStyle) {
        const c2 = cp.ctx
        c2.fillStyle = fillStyle;
        c2.beginPath();
        c2.arc(this.x, this.y, this.r() / cp.getZf(), 0, 2 * Math.PI);
        c2.closePath();
        c2.fill();
    }

    /**
     * Display planet acceleration
     * 
     * @param {GeoViewer} cp 
     * @param {String} strokeStyle 
     * @param {number} lineWidth 
     * @param {number} factor 
     */
    displayAcceleration(cp, strokeStyle = "cyan", lineWidth = 1, factor = 5000) {
        const c2 = cp.ctx
        c2.strokeStyle = strokeStyle;
        c2.lineWidth = lineWidth;

        c2.beginPath();
        c2.moveTo(this.x, this.y);
        c2.lineTo(this.x + factor * this.ax, this.y + factor * this.ay);
        c2.closePath();
        c2.stroke();
    }

}
