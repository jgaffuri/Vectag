import { Land } from './Land';
import { CanvasPlus } from '../base/canvasplus';

class PreyPredatorSimulation {

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

            //frame
            this.c2d.strokeStyle = "darkgray";
            this.c2d.beginPath();
            this.c2d.rect(this.geoToPixX(0), this.geoToPixY(this.h), th.w / this.ps, th.h / this.ps);
            this.c2d.stroke();
        };
    

        /** @type {Land} */
        this.land = new Land()

    }


    initRandom(nb = 1000) {
        //TODO
        return this;
    }


    //start
    start(timeStepMs = 10, nbIterations = -1) {
        let i = 0;
        const t = this;
        const engine = function () {
            t.land.step(timeStepMs);
            t.cplus.redraw();
            if (nbIterations > 0 && i++ > nbIterations)
                return;
            setTimeout(engine, 0);
        };
        engine();
    }

}


export const preyPredator = function (opts) {
    return new PreyPredatorSimulation(opts)
}
