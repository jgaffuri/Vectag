//@ts-check
/** @typedef { {xMin: number, xMax: number, yMin: number, yMax: number} } Envelope */

import { zoom as d3zoom, zoomIdentity } from "d3-zoom";
import { select as d3select } from "d3-selection";

/**
 * A HTML canvas for geo data display, enhanced with zoom and pan capabilities.
 * 
 * @author Julien Gaffuri
 */
export class GeoViewer {

    /**
     * @constructor
     * @param {string} canvasId
     * @param {object} center Geographical coordinates of the center
     * @param {number} zf The zoom factor (pixel size, in ground m)
     */
    constructor(canvasId = "vacanvas", center = undefined, zf = 1) {

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

        // set geo coordinates of the center
        this.setCenter(center || { x: this.w * 0.5, y: this.h * 0.5 })

        // set zoom factor: pixel size, in m/pix
        this.setZf(zf);

        //extent
        /** @type {Envelope} */
        this.extGeo = undefined;
        this.updateExtentGeo()

        /*/mouse click - pan
        let mpan = false
        this.canvas.addEventListener("mousedown", e => { mpan = true });
        this.canvas.addEventListener("mousemove", e => {
            if (mpan) this.pan(-e.movementX * this.getZf(), e.movementY * this.getZf())
        });
        this.canvas.addEventListener("mouseup", e => { mpan = false });

        //mouse wheel - zoom
        const f = 1.5
        this.canvas.addEventListener("wheel", e => {
            const f_ = e.deltaY > 0 ? f : 1 / f;
            this.zoom(f_, this.pixToGeoX(e.offsetX), this.pixToGeoY(e.offsetY))
        });*/


        //d3 zoom
        const zoom = d3zoom();
        let tP = zoomIdentity
        zoom.on("zoom", (e) => {
            const t = e.transform
            const f = tP.k / t.k
            const dx = tP.x - t.x
            const dy = tP.y - t.y
            if (f == 1) {
                this.pan(dx * this.getZf(), -dy * this.getZf())
            } else {
                console.log(e)
                //TODO
                //get center of action
                //this.pixToGeoX(e.offsetX), this.pixToGeoY(e.offsetY)
                this.zoompan(f, c.x, c.y, dx * this.getZf(), -dy * this.getZf())
                //this.zoom(f)
            }
            tP = t
        });
        //attach zoom
        d3select(this.canvas).call(zoom);


    }

    /**
     * Zoom and pan.
     * @param {number} f The zoom factor, within ]0, Infinity]. 1 is for no change. <1 to zoom-in, >1 to zoom-out.
     * @param {number} xGeo The x geo position fixed in the screen.
     * @param {number} yGeo The y geo position fixed in the screen.
     * @param {number} dxGeo
     * @param {number} dyGeo
     */
    zoompan(f = 1, xGeo = this.center.x, yGeo = this.center.y, dxGeo = 0, dyGeo = 0) {
        //TODO force extend to remain

        /*this.center.x += (xGeo - this.center.x) * (1 - f)
        this.center.y += (yGeo - this.center.y) * (1 - f)
        this.center.x += dxGeo;
        this.center.y += dyGeo;*/
        this.setZf(f * this.getZf());
        this.center.x += dxGeo;
        this.center.y += dyGeo;

        this.updateExtentGeo()
        this.redraw();
    }




    /** @param {{x:number,y:number}} v Geographical coordinates of the center */
    setCenter(v) { this.center = v; }
    /** @returns {{x:number,y:number}} Geographical coordinates of the center */
    getCenter() { return this.center; }

    /** @param {number} v The zoom factor (pixel size, in ground m) */
    setZf(v) { this.zf = v; }
    /** @returns {number} The zoom factor (pixel size, in ground m) */
    getZf() { return this.zf; }




    /** Initialise canvas transform with identity transformation. */
    initCanvasTransform() {
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    /** Initialise canvas transform with geo to screen transformation, so that geo objects can be drawn directly in geo coordinates. */
    setCanvasTransform() {
        const k = 1 / this.getZf();
        const tx = -this.center.x / this.getZf() + this.w * 0.5;
        const ty = this.center.y / this.getZf() + this.h * 0.5;
        this.ctx.setTransform(k, 0, 0, -k, tx, ty);
    }


    /** The function specifying how to draw the map. */
    redraw() {
        throw new Error('Method redraw not implemented.');
    }

    /**
     * Clear the app screen. To be used before a redraw for example.
     * @param {string} color 
     */
    clear(color = "white") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.w, this.h);
    }

    //conversion functions
    /**
     * @param {number} xGeo Geo x coordinate, in m.
     * @returns {number} Screen x coordinate, in pix.
    */
    geoToPixX(xGeo) { return (xGeo - this.center.x) / this.getZf() + this.w * 0.5; }
    /**
     * @param {number} yGeo Geo y coordinate, in m.
     * @returns {number} Screen y coordinate, in pix.
    */
    geoToPixY(yGeo) { return -(yGeo - this.center.y) / this.getZf() + this.h * 0.5; }
    /**
     * @param {number} x Screen x coordinate, in pix.
     * @returns {number} Geo x coordinate, in m.
    */
    pixToGeoX(x) { return (x - this.w * 0.5) * this.getZf() + this.center.x; }
    /**
     * @param {number} y Screen y coordinate, in pix.
     * @returns {number} Geo y coordinate, in m.
    */
    pixToGeoY(y) { return -(y - this.h * 0.5) * this.getZf() + this.center.y; }

    /**
     * @param {number} dxGeo
     * @param {number} dyGeo
     */
    pan(dxGeo, dyGeo) {
        //TODO force extend to remain
        this.center.x += dxGeo;
        this.center.y += dyGeo;
        this.updateExtentGeo()
        this.redraw();
    }

    /**
     * Zoom.
     * @param {number} f The zoom factor, within ]0, Infinity]. 1 is for no change. <1 to zoom-in, >1 to zoom-out.
     * @param {number} xGeo The x geo position fixed in the screen.
     * @param {number} yGeo The y geo position fixed in the screen.
     */
    zoom(f = 1, xGeo = this.center.x, yGeo = this.center.y) {
        //TODO force extend to remain
        this.setZf(f * this.getZf());
        this.center.x += (xGeo - this.center.x) * (1 - f)
        this.center.y += (yGeo - this.center.y) * (1 - f)
        this.updateExtentGeo()
        this.redraw();
    }

    /**
     * @param {number} marginPx 
     * @returns {Envelope} The envelope of the view, in geo coordinates.
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
