/**
 * Created by juju on 01/01/15.
 */

var CanPl =  CanPl || {};

$(function() {
    (function(CanPl,$) {
        //TODO annotations

        /**
         * @constructor
         * @param {string} div
         */
        CanPl.CanvasPlus = function(div){

            var cvs = document.getElementById(div);
            var ctx = cvs.getContext("2d");

            this.getContext2D = function(){
                return ctx;
            };

            this.forceDimension = function(w,h){
                ctx.canvas.width  = w;
                ctx.canvas.height = h;
            };

        };

    })(CanPl,$);
});
