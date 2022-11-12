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

        const c2 = cp.ctx
        c2.strokeStyle = strokeStyle;
        c2.lineWidth = lineWidth;

        c2.beginPath();
        c2.moveTo(0, 0);
        c2.lineTo(300, 150);
        c2.stroke();

    }

}
