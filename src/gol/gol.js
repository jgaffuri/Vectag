import { CanvasPlus } from '../base/canvasplus';
import { Universe } from './Universe';

//TODO zoom/pan, with canvas transform: better universe limits
//TODO buttons (play, stop, speed, draw, pan)
//TODO check canvas animation

//entry point
export const gameOfLife = function (divId, canvasId) {

    var cdiv = document.getElementById(divId);
    /** @type {number} */
    var w = cdiv.offsetWidth;
    /** @type {number} */
    var h = cdiv.offsetHeight;

    var uni = new Universe(w, h).fillRandomly(0.05);
    //var uni = new Universe(500, 300).fillRandomly(0.05);

    var cplus = new CanvasPlus(canvasId, w, h);
    cplus.redraw = function () {
        var ctx = this.getContext2D();
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#0000FF";
        for (var i = 0; i < uni.population.length; i++) {
            /** @type {Cell} */
            var cell = uni.population[i];
            //ctx.beginPath();
            //ctx.arc(cell.x,cell.y,1,0,2*Math.PI);
            //ctx.fill();
            ctx.fillRect(cell.x, cell.y, 1, 1);
        }
    };

    //start
    uni.start(-1, 0, cplus);

}
