//@ts-check
import { Map } from "./Map";
import { GeoCanvas } from "../base/GeoCanvas"
import { AgentPoint } from "../base/AgentPoint";

export class Building extends AgentPoint {

    /**
     * @constructor
     * @param {Map} m The map the building belongs to.
     * @param {number} x The x position
     * @param {number} y The y position
     */
    constructor(m, x, y, area) {

        //
        super(x, y)

        /** @type {Map} */
        this.m = m;
        m.bs.push(this)

        //set position
        /** @type {number} */
        this.x = x
        /** @type {number} */
        this.y = y
        /** @type {number} */
        this.area = area
    }

    observe() {

    }


    change() {

    }


    /**
     * Display
     * 
     * @param {GeoCanvas} cp 
     * @param {String} fillStyle 
     * @param {String} strokeStyle 
     */
    display(cp, fillStyle, strokeStyle, lineWidth) {
        const c2 = cp.ctx
        c2.fillStyle = fillStyle;
        c2.strokeStyle = strokeStyle;
        c2.lineWidth = lineWidth;
        const r = Math.sqrt(this.area / Math.PI)
        c2.beginPath();
        c2.arc(this.x, this.y, r, 0, 2 * Math.PI);
        c2.closePath();
        c2.fill();
        c2.stroke();
    }


}
