//@ts-check

import { GeoCanvas } from "../base/GeoCanvas";

export class Road {

    /**
     * 
     * @param {object} geom 
     * @param {number} width 
     */
    constructor(geom, width) {

        /** @type {object} */
        this.geom = geom
        /** @type {number} */
        this.width = width

    }


    /**
     * Display
     * 
     * @param {GeoCanvas} cp 
     * @param {String} strokeStyle 
     * @param {number} lineWidth 
     */
    display(cp, strokeStyle, lineWidth) {
        const cs = this.geom.getCoordinates();
        if (cs.length == 0) return;

        const c2 = cp.ctx
        c2.strokeStyle = strokeStyle;
        c2.lineWidth = lineWidth;

        //move to first point
        let c = cs[0]
        c2.moveTo(c.x, c.y);

        //trace line
        c2.beginPath();
        for (let i = 1; i < cs.length; i++) {
            c = cs[i]
            c2.lineTo(c.x, c.y);
        }
        c2.stroke();

    }

}
