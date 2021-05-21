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
            const c2 = this.c2d

            const preyColor = "blue"
            const preyColor2 = "rgba(0,0,255,0.5)"
            const predatorColor = "red"
            const predatorColor2 = "rgba(255,0,0,0.5)"
            const backColor = "rgba(255,255,255,0.5)"
            const backColor2 = "white"

            c2.fillStyle = backColor2;
            c2.fillRect(0, 0, w, h);


            //frame
            c2.strokeStyle = "darkgray";
            c2.beginPath();
            c2.rect(this.geoToPixX(0), this.geoToPixY(this.h), th.w / this.ps, th.h / this.ps);
            c2.stroke();
        };


        /** @type {Land} */
        this.land = new Land()

    }


    initRandom(nb = 1000) {
        //TODO
		for(int i=0;i<5;i++)
			preys.add(new Animal(Animal.PREY, this, w*Math.random(), h*Math.random()));
		for(int i=0;i<150;i++)
			predators.add(new Animal(Animal.PREDATOR, this, w*Math.random(), h*Math.random()));

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
