/**
 * Created by juju on 01/01/15.
 */

var CanPl =  CanPl || {};

$(function() {
    (function(CanPl,$) {

        /**
         * @constructor
         * @struct
         * @param {string} div
         */
        CanPl.CanvasPlus = function(div){

            /**@type {Object} */
            var cvs = document.getElementById(div);
            /**@type {Object} */
            var ctx = cvs.getContext("2d");
            /**@type {CanPl.CanvasPlus} */
            var that = this;

            /**
             * @return {Object}
             */
            this.getContext2D = function(){
                return ctx;
            };

            /**
             * @param {number} w
             * @param {number} h
             * @return {CanPl.CanvasPlus}
             */
            this.forceDimension = function(w,h){
                ctx.canvas.width  = w;
                ctx.canvas.height = h;
                return this;
            };

            /**
             * @return {CanPl.CanvasPlus}
             */
            this.redraw = function(){
                console.log("Override redraw method");
                return this;
            };

            $("#"+div).click(function(e) {
                console.log(canvasClickPosition(cvs, e));
                ctx.translate(10,10);
                //ctx.scale(2,2);
                //ctx.scale(0.5,0.5);
                that.redraw();
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
