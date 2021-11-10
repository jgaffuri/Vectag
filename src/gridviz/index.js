//@ts-check
import { CanvasPlus } from '../base/CanvasPlus';

class GridViz {

    constructor(opts) {
        opts = opts || {};

        opts.canvasId = opts.canvasId || "vacanvas";
        const canvas = document.getElementById(opts.canvasId);

        /** @type {number} */
        this.w = opts.w || canvas.offsetWidth;
        /** @type {number} */
        this.h = opts.h || canvas.offsetHeight;

        /** @type {CanvasPlus} */
        this.cplus = new CanvasPlus();
        this.cplus.c2d.fillStyle = "black";
        this.cplus.c2d.fillRect(0, 0, this.w, this.h);

        const th = this;
        this.cplus.redraw = function () {
            const c2 = this.c2d

            //clear
            c2.fillStyle = "black";
            c2.fillRect(0, 0, th.w, th.h);

            //frame
            c2.strokeStyle = "red";
            c2.beginPath();
            c2.rect(this.geoToPixX(0) - 3, this.geoToPixY(this.h) - 3, th.w / this.ps + 3, th.h / this.ps + 3);
            c2.stroke();

            return this
        };

        //first redraw
        this.cplus.redraw()
    }

}

export const gridvizApp = function (opts) {
    return new GridViz(opts)
}
