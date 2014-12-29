//java -jar /home/juju/programmes/closure_compiler/compiler.jar --js src/vectag.js --js_output_file dist/vectag.min.js
//java -jar /home/juju/programmes/closure_compiler/compiler.jar --js src/vectag.js --js_output_file dist/vectag.min.js --compilation_level ADVANCED_OPTIMIZATIONS

VA = {};

$(function() {
    (function(VA,$) {
        //TODO canvas dimension
        //TODO use canvas transform


        var cdiv = $("#cdiv");
        //@type {number}
        var w = cdiv.width();
        //@type {number}
        var h = cdiv.height();

        //@type {Universe}
        var uni = new Universe();

        //fill universe
        var nb = 100, i=0;
        while(i < nb){
            var x = Math.round(w*Math.random());
            var y = Math.round(h*Math.random());
            var ag = uni.add(x,y);
            if(ag) i++;
        }

        $("#canvas").click(function(e) {
            console.log(VA.canvasClickPosition(cvs, e));
        });

        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext("2d");
        ctx.canvas.width  = w;
        ctx.canvas.height = h;
        VA.redraw = function(){
            //ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "#0000FF";
            for(i=0; i<uni.population.length; i++){
                var ag = uni.population[i];
                ctx.beginPath();
                ctx.arc(ag.x,ag.y,1,0,2*Math.PI);
                ctx.fill();
            }
        };
        //draw universe
        VA.redraw();


        /**
         * @constructor
         */
        function Universe(){
            //@type {Array.<Ag>}
            this.population = [];
            this.populationI = {};

            /**
             * @param {number} x
             * @param {number} y
             * @return {Ag}
             */
            this.add = function(x,y){
                //find agent at location
                var id = x+"_"+y;
                var ag = this.populationI[id];
                if(ag) return null;
                //create new agent
                ag = new Ag(x,y);
                this.population.push(ag);
                this.populationI[id] = ag;
                return ag;
            }
        }

        /**
         * @constructor
         * @param {number} x
         * @param {number} y
         */
        function Ag(x,y){
            this.x = x;
            this.y = y;
        }


        /**
         * @constructor
         * @param {object} elt
         * @param {object} e
         * @return {Object.<string, number>}
         */
        VA.canvasClickPosition = function(elt, e){
            if (e.offsetX && e.offsetY)
                return {x:e.offsetX, y:e.offsetY};
            var tX=0, tY=0;
            do {
                tX += elt.offsetLeft - elt.scrollLeft;
                tY += elt.offsetTop - elt.scrollTop;
            } while(elt = elt.offsetParent);
            return {x:e.pageX-tX, y:e.pageY-tY}
        }

    })(VA,$);
});
