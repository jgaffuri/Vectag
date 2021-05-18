import { CanvasPlus } from '../base/canvasplus';
import { Universe } from './Universe';

//TODO zoom/pan, with canvas transform: better universe limits
//TODO buttons (play, stop, speed, draw, pan)
//TODO check canvas animation


class GoLSimulation {

    constructor(opts) {
        opts = opts || {};
        opts.divId = opts.divId || "cdiv";
        opts.canvasId = opts.canvasId || "canvas";

        const cdiv = document.getElementById(opts.divId);
        /** @type {number} */
        const w = cdiv.offsetWidth;
        /** @type {number} */
        const h = cdiv.offsetHeight;

        this.uni = new Universe(w, h);

        this.cplus = new CanvasPlus(opts.canvasId, w, h);

        const th = this;
        this.cplus.redraw = function () {
            const ctx = this.getContext2D();
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = "#0000FF";
            for (let i = 0; i < th.uni.population.length; i++) {
                /** @type {Cell} */
                const cell = th.uni.population[i];
                //ctx.beginPath();
                //ctx.arc(cell.x,cell.y,1,0,2*Math.PI);
                //ctx.fill();
                ctx.fillRect(cell.x, cell.y, 1, 1);
            }
        };
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
    }

}


export const gameOfLife = function (opts) {
    return new GoLSimulation(opts)
}
