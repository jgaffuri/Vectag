import { Universe } from './Universe';
import { Planet } from './Planet';
import { CanvasPlus } from '../base/canvasplus';

//TODO
//bigbang start

//entry point
export const planets = function (opts = {}) {

    const out = {};
    out.divId = opts.divId || "cdiv";
    out.canvasId = opts.canvasId || "canvas";

    //
    //minSpeed = 0, maxSpeed

    const cdiv = document.getElementById(out.divId);
    /** @type {number} */
    const w = cdiv.offsetWidth;
    /** @type {number} */
    const h = cdiv.offsetHeight;

    /** @type {Universe} */
    const uni = new Universe(w, h)

    /** @type {CanvasPlus} */
    const cplus = new CanvasPlus(out.canvasId, w, h);
    const ctx = cplus.getContext2D();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, w, h);

    cplus.redraw = function () {
        //ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, w, h);

        //display planets
        for (let j = 0; j < uni.ps.length; j++) {
            /** @type {Planet} */
            const p = uni.ps[j];
            const t = p.m / uni.m();
            ctx.fillStyle = "rgb(255,255," + Math.floor(255 * (1 - t)) + ")";
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r(), 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        }

        //label
        ctx.fillStyle = "rgb(200,200,200)";
        ctx.fillRect(0, 0, 65, 13);
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillText(uni.ps.length + " planets", 2, 10);
    };

    


    out.fillRandomly = function(nb = 1000, mi = 0.5, minSpeed = 0, maxSpeed = 0.1) {
        /** @type {Array.<Planet>} */
        uni.ps = [];
        for (let i = 0; i < nb; i++) {
            const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
            const angle = 2 * Math.random() * Math.PI;
            uni.ps.push(new Planet(uni, mi, w * Math.random(), h * Math.random(), speed * Math.cos(angle), speed * Math.sin(angle)));
        }
        return this;
    }


    out.fillBigBang = function(nb = 1000, mi = 0.5, minSpeed = 0, maxSpeed = 0.1) {
        /** @type {Array.<Planet>} */
        uni.ps = [];
        const cx = w * 0.5, cy = h * 0.5;
        const angleStep = 2 * Math.random() / nb;
        const rad = 10;
        for (let i = 0; i < nb; i++) {
            const a = i * angleStep;
            const x = cx + rad * Math.cos(a), y = cy + rad * Math.sin(a);
            const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
            const sx = speed * Math.cos(a), sy = speed * Math.sin(a);
            uni.ps.push(new Planet(uni, mi, x, y, sx, sy));
        }
        return this;
    }



    //start
    out.start = function(bounce = false, timeStepMs = 10, nbIterations = -1) {
        let i = 0;
        const engine = function () {
            uni.step(timeStepMs, bounce);
            cplus.redraw();
            if (nbIterations > 0 && i++ > nbIterations)
                return;
            setTimeout(engine, 0);
        };
        engine();
    }

    out.stop = function() {
        //TODO
    }


    return out;

}


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
