import { Universe } from './Universe';
import { CanvasPlus } from '../base/canvasplus';

//TODO add restart/big bang button
/* Button restart = new Button("Recommencer!");
 restart.addClickHandler(new ClickHandler() {
 @Override
 public void onClick(ClickEvent event) {
 u.fill();
 c.getContext2d().setFillStyle(CssColor.make(0,0,0));
 c.getContext2d().fillRect(0, 0, w, h);
 }
 });
 RootPanel.get("b").add(restart);*/

class PlanetSimulation {

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

            //clear, with transparency
            this.c2d.fillStyle = "rgba(0,0,0,0.05)";
            this.c2d.fillRect(0, 0, th.w, th.h);
    
            //display planets
            for (let j = 0; j < th.uni.ps.length; j++) {
                /** @type {Planet} */
                const p = th.uni.ps[j];
                const t = p.m / th.uni.m();
                this.c2d.fillStyle = "rgb(255,255," + Math.floor(255 * (1 - t)) + ")";
                this.c2d.beginPath();
                this.c2d.arc(this.geoToPixX(p.x), this.geoToPixY(p.y), p.r() / this.ps, 0, 2 * Math.PI);
                this.c2d.closePath();
                this.c2d.fill();
            }
    
            //label
            this.c2d.fillStyle = "rgb(200,200,200)";
            this.c2d.fillRect(0, 0, 65, 13);
            this.c2d.fillStyle = "rgb(0,0,0)";
            this.c2d.fillText(th.uni.ps.length + " planets", 2, 10);

            //frame
            this.c2d.strokeStyle = "darkgray";
            this.c2d.beginPath();
            this.c2d.rect(this.geoToPixX(0), this.geoToPixY(this.h), th.w / this.ps, th.h / this.ps);
            this.c2d.stroke();
        };
    
        /** @type {Universe} */
        this.uni = new Universe(this.w, this.h)
    }

    //
    initRandom(nb = 1000, mi = 0.5, minSpeed = 0, maxSpeed = 0.1) {
        /** @type {Array.<Planet>} */
        this.uni.ps = [];
        for (let i = 0; i < nb; i++) {
            const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
            const angle = 2 * Math.random() * Math.PI;
            this.uni.createPlanet(mi, this.w * Math.random(), this.h * Math.random(), speed * Math.cos(angle), speed * Math.sin(angle));
        }
        return this;
    }

    //
    initBigBang(nb = 1000, mi = 1, minSpeed = 0.35, maxSpeed = 0.7, rad = 100) {
        /** @type {Array.<Planet>} */
        this.uni.ps = [];
        const cx = this.w * 0.5, cy = this.h * 0.5;
        const angleStep = 2*Math.PI / nb;
        for (let i = 0; i < nb; i++) {
            const a = i * angleStep;

            //position
            const d = rad * Math.random();
            const x = cx + d * Math.cos(a), y = cy + d * Math.sin(a);

            //speed
            const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
            const aS = a + 2*(Math.random()-0.5) * 2*Math.PI / 3;
            const sx = speed * Math.cos(aS), sy = speed * Math.sin(aS);

            this.uni.createPlanet(mi, x, y, sx, sy);
        }
        return this;
    }

    //start
    start(bounce = false, vmax = 0.8, collisionFactor = 0.8, timeStepMs = 10, nbIterations = -1) {
        let i = 0;
        const t = this;
        const engine = function () {
            t.uni.step(bounce, vmax, collisionFactor, timeStepMs);
            t.cplus.redraw();
            if (nbIterations > 0 && i++ > nbIterations)
                return;
            setTimeout(engine, 0);
        };
        engine();
    }

    //stop
    stop() {
        //TODO
    }

}


export const planets = function (opts) {
    return new PlanetSimulation(opts)
}
