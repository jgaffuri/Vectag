//@ts-check
import { GeoCanvas } from "../base/GeoCanvas"
import { SpatialIndex } from "../base/SpatialIndex"

export class Building {

    /**
     * @constructor
     * @param {number} x The x position
     * @param {number} y The y position
     * @param {number} area The area
     */
    constructor(x, y, area) {

        //set position
        /** @type {number} */
        this.x = x
        /** @type {number} */
        this.y = y
        /** @type {number} */
        this.area = area
    }

    /**
     * @returns { number }
     */
    r() {
        return Math.sqrt(this.area / Math.PI)
    }

    /**
     * @param {Building} b 
     */
    overlap(b) {
        const d1 = b.r() + this.r()
        const d2 = Math.hypot((b.x - this.x), (b.y - this.y));
        return d2 < d1
    }



    /**
     * @param {SpatialIndex.<Building>} sindex 
     * @param {number} sDistance 
     * @returns {boolean}
     */
    checkCollision(sindex, sDistance) {

        //get buildings around using spatial index
        /** @type {Array.<Building>} */
        const ss = sindex.get(this.x - sDistance, this.y - sDistance, this.x + sDistance, this.y + sDistance);

        for (let b of ss) {
            if (b == this) continue;
            if (this.overlap(b)) return true
        }
        return false;
    }




    /**
     * Display
     * 
     * @param {GeoCanvas} cp 
     * @param {String} fillStyle 
     * @param {String} strokeStyle 
     * @param {number} lineWidth 
     */
    display(cp, fillStyle, strokeStyle, lineWidth) {
        const c2 = cp.ctx
        c2.fillStyle = fillStyle;
        c2.strokeStyle = strokeStyle;
        c2.lineWidth = lineWidth;
        c2.beginPath();
        c2.arc(this.x, this.y, this.r(), 0, 2 * Math.PI);
        c2.closePath();
        c2.fill();
        c2.stroke();
    }


}
