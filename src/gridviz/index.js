//@ts-check
import { CanvasPlus } from '../base/CanvasPlus';
import { csv, json } from "d3-fetch";
import { interpolateReds } from "d3-scale-chromatic"

class GridViz {

    constructor(opts) {
        opts = opts || {};

        opts.canvasId = opts.canvasId || "vacanvas";
        const canvas = document.getElementById(opts.canvasId);

        /** @type {number} */
        this.w = opts.w || canvas.offsetWidth;
        /** @type {number} */
        this.h = opts.h || canvas.offsetHeight;

        /** @type {CanvasPlus} */
        this.cplus = new CanvasPlus();
        this.cplus.c2d.fillStyle = "black";
        this.cplus.c2d.fillRect(0, 0, this.w, this.h);

        this.cplus.center = {x:64000,y:64000}
        this.cplus.ps = 1000


        /** @type {Object} */
        let gridInfo = null;

        /** @type {Array} */
        let cells = null;



        const th = this;
        this.cplus.redraw = function () {
            const c2 = this.c2d

            //clear
            c2.fillStyle = "black";
            c2.fillRect(0, 0, th.w, th.h);

            //frame
            if(!cells) return;
            if(!gridInfo) return;

            const r = gridInfo.resolutionGeo

            for(let i=0; i<cells.length; i++) {
                /** @type {{x:number,y:number}} */
                const cell = cells[i];
                c2.fillStyle = getColor(cell[2011]);
                c2.fillRect(this.geoToPixX(r*cell.x), this.geoToPixY(r*cell.y), r/this.ps, r/this.ps);
            }

            return this
        };

        //load data
        csv("https://raw.githubusercontent.com/eurostat/gridviz/master/assets/csv/Europe/grid_pop_tiled/1km/40/27.csv").then((data) => {
            cells = data;
            th.cplus.redraw()
        });

        json("https://raw.githubusercontent.com/eurostat/gridviz/master/assets/csv/Europe/grid_pop_tiled/1km/info.json").then((data) => {
            gridInfo = data;
            th.cplus.redraw()
        });

        const getColor = (v) => {
            //TODO better
            return interpolateReds(v/200)
        }


    }

}

export const gridvizApp = function (opts) {
    return new GridViz(opts)
}
