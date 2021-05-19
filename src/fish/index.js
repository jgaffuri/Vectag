import { Sea } from './Sea';
import { CanvasPlus } from '../base/canvasplus';

class FishSimulation {

    constructor(opts) {
        opts = opts || {};
        opts.divId = opts.divId || "vadiv";

        const div = document.getElementById(opts.divId);
        /** @type {number} */
        this.w = div.offsetWidth;
        /** @type {number} */
        this.h = div.offsetHeight;

        /** @type {CanvasPlus} */
        this.cplus = new CanvasPlus(opts.divId, "vacanvas");
        this.cplus.c2d.fillStyle = "black";
        this.cplus.c2d.fillRect(0, 0, this.w, this.h);

        const th = this;
        this.cplus.redraw = function () {

        };

        /** @type {Sea} */
        this.sea = new Sea(this.cplus.canvas, this.w, this.h)

    }
}

export const fish = function (opts) {
    return new FishSimulation(opts)
}
