
export class CanvasPlus {

    //check:
    //https://github.com/kangax/fabric.js/
    //http://kineticjs.com/
    //http://www.createjs.com/Docs/EaselJS/classes/MouseEvent.html

    /**
     * @constructor
     * @struct
     * @param {string} canvasId
     * @param {number=} w
     * @param {number=} h
     */
    constructor(canvasId = "canvas", w=100, h=100) {
        /**@type {Object} */
        var cvs = document.getElementById(canvasId);

        /**@type {Object} */
        var ctx = cvs.getContext("2d");
        if (w) ctx.canvas.width = w;
        if (h) ctx.canvas.height = h;
        /**@return {Object} */
        this.getContext2D = function () { return ctx; };
    }


    /** @return {CanPl.CanvasPlus} */
    redraw() {
        console.log("Override redraw method");
        return this;
    }

    /**
     * @param {number} x
     * @param {number} y
     */
    pan(x, y) {
        //TODO clear
        //TODO ctx.translate(10,10);
        //TODO updatelimits
        this.redraw();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} f
     */
    zoom(x, y, f) {
        //TODO
        //ctx.scale(2,2);
        this.redraw();
    }

    /*
            $("#"+div).click(function(e) {
                console.log(canvasClickPosition(cvs, e));
                //TODO pan
            });
    */

    /**
     * @param {object} elt
     * @param {object} e
     * @return {Object.<string, number>}
     */
    canvasClickPosition(elt, e) {
        if (e.offsetX && e.offsetY)
            return { x: e.offsetX, y: e.offsetY };
        var tX = 0, tY = 0;
        do {
            tX += elt.offsetLeft - elt.scrollLeft;
            tY += elt.offsetTop - elt.scrollTop;
            elt = elt.offsetParent;
        } while (elt);
        return { x: e.pageX - tX, y: e.pageY - tY };
    }

}
