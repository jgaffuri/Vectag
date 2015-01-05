/**
 * Created by juju on 01/01/15.
 */

var CanPl =  CanPl || {};

$(function() {
    (function(CanPl,$) {
        //check:
        //https://github.com/kangax/fabric.js/
        //http://kineticjs.com/
        //http://www.createjs.com/Docs/EaselJS/classes/MouseEvent.html

        /**
         * @constructor
         * @struct
         * @param {string} div
         * @param {number=} w
         * @param {number=} h
         */
        CanPl.CanvasPlus = function(div, w, h){

            /**@type {Object} */
            var cvs = document.getElementById(div);

            /**@type {Object} */
            var ctx = cvs.getContext("2d");
            if(w) ctx.canvas.width  = w;
            if(h) ctx.canvas.height = h;
            /**@return {Object} */
            this.getContext2D = function(){ return ctx; };

            /**
             * @return {CanPl.CanvasPlus}
             */
            this.redraw = function(){
                console.log("Override redraw method");
                return this;
            };

            /**
             * @param {number} x
             * @param {number} y
             */
            var pan = function(x,y){
                //TODO clear
                //TODO ctx.translate(10,10);
                //TODO updatelimits
                this.redraw();
            };

            /**
             * @param {number} x
             * @param {number} y
             * @param {number} f
             */
            var zoom = function(x,y,f){
                //TODO
                //ctx.scale(2,2);
                this.redraw();
            };

            $("#"+div).click(function(e) {
                console.log(canvasClickPosition(cvs, e));
                //TODO pan
            });

            /**
             * @param {object} elt
             * @param {object} e
             * @return {Object.<string, number>}
             */
            var canvasClickPosition = function(elt, e){
                if (e.offsetX && e.offsetY)
                    return {x:e.offsetX, y:e.offsetY};
                var tX=0, tY=0;
                do {
                    tX += elt.offsetLeft - elt.scrollLeft;
                    tY += elt.offsetTop - elt.scrollTop;
                } while(elt = elt.offsetParent);
                return {x:e.pageX-tX, y:e.pageY-tY}
            };

        };
    })(CanPl,$);
});
