//@ts-check
import { GeoCanvas } from '../base/GeoCanvas';
import { Universe } from './Universe';
import { Cell } from './Cell';

//TODO zoom/pan, with canvas transform: better universe limits
//TODO buttons (play, stop, speed, draw, pan)
//TODO check canvas animation


class GoLSimulation {

    constructor(opts) {
        opts = opts || {};

        opts.canvasId = opts.canvasId || "vacanvas";
        const canvas = document.getElementById(opts.canvasId);

        /** @type {number} */
        this.w = opts.w || canvas.offsetWidth;
        /** @type {number} */
        this.h = opts.h || canvas.offsetHeight;

        /** @type {GeoCanvas} */
        this.cplus = new GeoCanvas();

        const th = this;
        this.cplus.redraw = function () {
            const c2 = this.ctx

            //clear
            this.initCanvasTransform()
            c2.fillStyle = "white";
            c2.fillRect(0, 0, th.w, th.h);

            //draw cells
            this.setCanvasTransform()
            c2.fillStyle = "blue";
            for (let cell of th.uni.population)
                c2.fillRect((cell.x), (cell.y), 1, 1);

            //frame
            c2.strokeStyle = "darkgray";
            c2.lineWidth = 1 * th.cplus.getZf();
            c2.beginPath();
            c2.rect(0, 0, th.w, th.h);
            c2.stroke();

            return this
        };

        this.uni = new Universe(this.w, this.h);
    }


    //
    initRandom(density = 0.05) {
        let i = 0;
        /** @type {number} */
        const nb = this.uni.w * this.uni.h * density;
        while (i < nb) {
            const x = Math.round(this.uni.w * Math.random());
            const y = Math.round(this.uni.h * Math.random());
            /** @type {Cell} */
            const cell = this.uni.add(x, y);
            if (cell) i++;
        }
        return this;
    }


    //
    start() {
        this.uni.start(-1, 0, this.cplus);
        return this;
    }

}


export const gameOfLife = function (opts) {
    return new GoLSimulation(opts)
}
