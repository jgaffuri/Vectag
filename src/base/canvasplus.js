
export class CanvasPlus {

    //check:
    //https://github.com/kangax/fabric.js/
    //http://kineticjs.com/
    //http://www.createjs.com/Docs/EaselJS/classes/MouseEvent.html

    /**
     * @constructor
     * @struct
     * @param {string} divId
     * @param {number=} w
     * @param {number=} h
     */
    constructor(divId = "vadiv", canvasId = "vacanvas") {

        const div = document.getElementById(divId);
        /** @type {number} */
        this.w = div.offsetWidth;
        /** @type {number} */
        this.h = div.offsetHeight;

        //make canvas within div
        this.canvas = document.createElement("canvas");
        this.canvas.id = canvasId;
        this.canvas.width = this.w;
        this.canvas.height = this.h;
        div.appendChild(this.canvas)

        /**@type {Object} */
        this.c2d = this.canvas.getContext("2d");
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
        const tX = 0, tY = 0;
        do {
            tX += elt.offsetLeft - elt.scrollLeft;
            tY += elt.offsetTop - elt.scrollTop;
            elt = elt.offsetParent;
        } while (elt);
        return { x: e.pageX - tX, y: e.pageY - tY };
    }

}
