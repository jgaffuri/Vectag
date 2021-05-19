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


        /*/mouse listeners
        c.addMouseOverHandler(new MouseOverHandler() {
            @Override
            public void onMouseOver(MouseOverEvent e) {
                s.shark=new double[]{e.getX(),e.getY(),0};
            }
        });
        c.addMouseMoveHandler(new MouseMoveHandler() {
            @Override
            public void onMouseMove(MouseMoveEvent e) {
                double a=Math.atan2(e.getY()-s.shark[1],e.getX()-s.shark[0]);
                s.shark=new double[]{e.getX(),e.getY(),a};
            }
        });
        c.addMouseOutHandler(new MouseOutHandler() {
            @Override
            public void onMouseOut(MouseOutEvent e) {
                s.shark=null;
            }
        });*/



        /** @type {Sea} */
        this.sea = new Sea(this.cplus.canvas, this.w, this.h, 300)

    }

    start() {
        const t = this;
        const engine = function () {
            t.sea.run();
            setTimeout(engine, 0);
        };
        engine();

    }


}

export const fish = function (opts) {
    return new FishSimulation(opts)
}
