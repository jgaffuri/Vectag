VA = {};

$(function() {
    (function(VA) {
        //TODO use annotations
        //TODO test closure compiler
        //java -jar /home/juju/programmes/closure_compiler/compiler.jar --js src/vectag.js --js_output_file dist/vectag.min.js
        //java -jar /home/juju/programmes/closure_compiler/compiler.jar --js src/vectag.js --js_output_file dist/vectag.min.js --compilation_level ADVANCED_OPTIMIZATIONS
        //TODO use canvas transform

        //@type {number}
        var w = 600;
        //@type {number}
        var h = 400;

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

        var ctx = document.getElementById("canvas").getContext("2d");
        VA.redraw = function(){
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

    })(VA);
});
