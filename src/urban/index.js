//@ts-check
import { GeoCanvas } from '../base/GeoCanvas';
import { Building } from './Building';
import { Map } from "./Map";

/**  */
class UrbanSimulation {

    /**
     * @param {Object} opts 
     */
    constructor(opts) {
        opts = opts || {};

        opts.canvasId = opts.canvasId || "vacanvas";
        const canvas = document.getElementById(opts.canvasId);
        if (canvas == null) throw "No canvas " + opts.canvasId;

        /** @type {number} */
        this.w = opts.w || canvas.offsetWidth;
        /** @type {number} */
        this.h = opts.h || canvas.offsetHeight;


        /** @type {GeoCanvas} */
        this.cplus = new GeoCanvas();
        this.cplus.ctx.fillStyle = "white";
        this.cplus.ctx.fillRect(0, 0, this.w, this.h);

        const th = this;
        this.cplus.redraw = function () {
            const c2 = this.ctx

            this.initCanvasTransform();

            //clear
            c2.fillStyle = "white";
            c2.fillRect(0, 0, th.w, th.h);

            this.setCanvasTransform()

            //display buildings
            for (let b of th.map.bs) {
                if (!this.toDraw(b)) continue
                b.display(this, "black")
            }

            //frame
            c2.strokeStyle = "darkgray";
            c2.lineWidth = 1 * th.cplus.getZf();
            c2.beginPath();
            c2.rect(0, 0, th.w, th.h);
            c2.stroke();

            return this;
        };

        /** @type {Map} */
        this.map = new Map(this.w, this.h)
    }


    /**
     * Start simulation
     * 
     * @param {number} timeStepMs 
     * @param {number} nbIterations 
     * @returns {this}
     */
    start(timeStepMs = 10, nbIterations = -1) {
        let i = 0;
        const t = this;
        const engine = function () {
            t.map.step();
            t.cplus.redraw();
            if (nbIterations > 0 && i++ > nbIterations)
                return;
            setTimeout(engine, 0);
        };
        engine();
        return this;
    }

    //stop
    stop() {
        //TODO
    }



    initRandom(nb = 100) {
        /** @type {Array.<Building>} */
        this.map.bs = [];
        for (let i = 0; i < nb; i++) {
            this.map.bs.push(new Building(this.map, this.map.w * Math.random(), this.map.h * Math.random()))
        }
        return this;
    }

}

/**
 * @param {Object} opts 
 */
export const urban = function (opts) {
    return new UrbanSimulation(opts)
}
