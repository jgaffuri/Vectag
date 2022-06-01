//@ts-check
/** @typedef { {xMin: number, xMax: number, yMin: number, yMax: number} } Envelope */

import { zoom as d3zoom, zoomIdentity } from "d3-zoom";
import { select } from "d3-selection";

/**
 * A HTML canvas, enhanced with zoom and pan capabilities.
 * 
 * @author Julien Gaffuri
 */
export class GeoViewer {

    /**
     * @constructor
     * @param {string} canvasId
     */
    constructor(canvasId = "vacanvas") {

        /** @type {object} */
        this.canvas = document.getElementById(canvasId);

        /** @type {number} */
        this.w = this.canvas.offsetWidth;
        /** @type {number} */
        this.h = this.canvas.offsetHeight;

        this.canvas.width = this.w;
        this.canvas.height = this.h;

        /**@type {object} */
        this.ctx = this.canvas.getContext("2d");

        //make zoom
        const zoom = d3zoom();
        zoom.on("zoom", (e) => zoomed(e.transform));



        /**
                //create initial transform
                const t0 = zoomIdentity
                    .translate(this.w / 2, this.h / 2)
                    .scale(k0)
                    .translate(-x0, y0);
        
                // set geo coordinates of the center
                this.setCenter({ x: this.w * 0.5, y: this.h * 0.5 })
        
                // set zoom factor: pixel size, in m/pix
                this.setZf(1);
        **/


        //get selection
        select(this.canvas)
            .call(zoom) //attach zoom
        //.call(zoom.transform, t0); //set initial position and zoom

        function zoomed(t) {
            //console.log(t);

            //?
            this.ctx.save();

            this.ctx.clearRect(0, 0, this.w, this.h);
            this.ctx.scale(1, -1);
            this.ctx.translate(t.x, -t.y);
            this.ctx.scale(t.k, t.k);

            this.redraw();

            //?
            this.ctx.restore();
        }


        //extent
        /** @type {Envelope} */
        this.extGeo = undefined;
        this.updateExtentGeo()
    }


    /** @param {{x:number,y:number}} v */
    setCenter(v) { this.center = v; }
    /** @returns {{x:number,y:number}} */
    getCenter() { return this.center; }

    /** @param {number} v */
    setZf(v) { this.zf = v; }
    /** @returns {number} */
    getZf() { return this.zf; }



    /**
     */
    redraw() {
        throw new Error('Method redraw not implemented.');
    }

    /**
     * Clear the app screen.
     * To be used before a redraw for example.
     * @param {*} color 
     */
    clear(color = "white") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.w, this.h);
    }

    //conversion functions
    /**
     * @param {number} xGeo
     * @returns {number}
    */
    geoToPixX(xGeo) { return (xGeo - this.center.x) / this.getZf() + this.w * 0.5; }
    /**
     * @param {number} yGeo
     * @returns {number}
    */
    geoToPixY(yGeo) { return -(yGeo - this.center.y) / this.getZf() + this.h * 0.5; }
    /**
     * @param {number} x
     * @returns {number}
    */
    pixToGeoX(x) { return (x - this.w * 0.5) * this.getZf() + this.center.x; }
    /**
     * @param {number} y
     * @returns {number}
    */
    pixToGeoY(y) { return -(y - this.h * 0.5) * this.getZf() + this.center.y; }

    /**
     * @param {number} marginPx 
     * @returns {Envelope}
     */
    updateExtentGeo(marginPx = 20) {
        this.extGeo = {
            xMin: this.pixToGeoX(-marginPx),
            xMax: this.pixToGeoX(this.w + marginPx),
            yMin: this.pixToGeoY(this.h + marginPx),
            yMax: this.pixToGeoY(-marginPx)
        }
        return this.extGeo;
    }

    /**
     * Check if the object has to be drawn
     * 
     * @param {{x:number,y:number}} obj 
     */
    toDraw(obj) {
        if (obj.x < this.extGeo.xMin) return false;
        if (obj.x > this.extGeo.xMax) return false;
        if (obj.y < this.extGeo.yMin) return false;
        if (obj.y > this.extGeo.yMax) return false;
        return true
    }

}
