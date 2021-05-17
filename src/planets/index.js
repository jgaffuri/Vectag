import { CanvasPlus } from '../base/canvasplus';
import { Universe } from './Universe';


//entry point
export const planets = function (divId, canvasId, nb = 1000, mi = 0.5, minSpeed = 0, maxSpeed = 0.1, nbIterations = -1) {

    const cdiv = document.getElementById(divId);
    /** @type {number} */
    const w = cdiv.offsetWidth;
    /** @type {number} */
    const h = cdiv.offsetHeight;

    /** @type {Universe} */
    const uni = new Universe(w, h, 10).fillRandomly(nb, mi, minSpeed, maxSpeed);

    /** @type {CanvasPlus} */
    const cplus = new CanvasPlus(canvasId, w, h);
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
            const t = p.m / (nb * mi);
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



    //start
    let i = 0;
    const engine = function () {
        uni.step();
        cplus.redraw();
        if (nbIterations > 0 && i++ > nbIterations)
            return;
        setTimeout(engine, 0);
    };
    engine();

    return this;

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
