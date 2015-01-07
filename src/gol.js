//java -jar /home/juju/programmes/closure_compiler/compiler.jar --js src/gol.js --js_output_file dist/gol.min.js
//java -jar /home/juju/programmes/closure_compiler/compiler.jar --js src/gol.js --js_output_file dist/gol.min.js --compilation_level ADVANCED_OPTIMIZATIONS

(function( GOL, $) {
    //TODO zoom/pan, with canvas transform: better universe limits
    //TODO test gc wit all + externs/export
    //TODO automate deployment (use ant?) - steps are: (closure compiler + html +) git merge toward branch gh-pages + git push
    //TODO buttons (play, stop, speed, draw, pan)
    //TODO jshint
    //TODO fix blue stuff in annotations
    //TODO check canvas animation

    /**
     * @constructor
     * @struct
     * @param {number} w
     * @param {number} h
     */
    GOL.Universe = function(w,h){
        /** @type {number} */
        this.w=w;
        /** @type {number} */
        this.h=h;
        /** @type {Array.<GOL.Cell>} */
        this.population = [];
        /** @type {Object.<string,GOL.Cell>}
         * @dict */
        this.populationI = {};

        /**
         * @param {number} x
         * @param {number} y
         * @return {GOL.Cell}
         */
        this.add = function(x,y){
            //find agent at location
            /**@type {string}*/
            var id = x+"_"+y;
            /**@type {GOL.Cell} */
            var cell = this.populationI[id];
            if(cell) return null;
            //create new cell
            cell = {x:x,y:y,nb:0};
            this.population.push(cell);
            this.populationI[id] = cell;
            return cell;
        };

        /**
         * @param {number} density
         * @return {GOL.Universe}
         */
        this.fillRandomly = function(density){
            var i=0;
            /** @type {number} */
            var nb = this.w*this.h*density;
            while(i < nb){
                var x = Math.round(this.w*Math.random());
                var y = Math.round(this.h*Math.random());
                /** @type {GOL.Cell} */
                var cell = this.add(x,y);
                if(cell) i++;
            }
            return this;
        };

        /**
         * @return {GOL.Universe}
         */
        this.step = function() {
            /** @type {number} */
            var i, j;
            /** @type {GOL.Cell} */
            var cell, cell_;
            /** @type {GOL.Cell} */
            var sur, sur_;
            /** @type {string} */
            var key;

            //populate cell surroundings
            /** @type {Object.<string, GOL.Cell>}
             * @dict */
            var surI = {};
            //go through list of cells
            for(i=0; i<this.population.length; i++){
                // +1 surrounding cells
                /** @type {Array.<GOL.Cell>} */
                var srs = getCellSurrounding(this.population[i], this);
                for(j=0; j<srs.length; j++){
                    sur = srs[j];
                    key = sur.x + "_" + sur.y;
                    sur_ = surI[key];
                    if(sur_){
                        sur_.nb++;
                    } else {
                        sur.nb = 1;
                        surI[key] = sur;
                    }
                }
            }

            //B3/S23

            //kill cells
            /** @type {Array.<GOL.Cell>} */
            var cellsToKeep = [];
            /** @type {Object.<string, GOL.Cell>}
             * @dict */
            var cellsToKeepI = {};
            for(i=0; i<this.population.length; i++){
                cell = this.population[i];
                key = cell.x + "_" + cell.y;
                cell_ = surI[key];
                if(!cell_) continue;
                //if (nb<2 or nb>3) -> kill
                if(cell_.nb<2 || cell_.nb>3) continue;
                cellsToKeep.push(cell);
                cellsToKeepI[key] = cell;
            }
            this.population = cellsToKeep;
            this.populationI = cellsToKeepI;

            //create new cells
            /** @type {Array.<GOL.Cell>} */
            var surs = VectA.objToArray(surI);
            surI = null;
            for(i=0; i<surs.length; i++){
                sur = surs[i];

                if(sur.nb !== 3) continue;

                //check if already alive
                key = sur.x + "_" + sur.y;
                cell = this.populationI[key];
                if(cell) continue;

                //create new cell
                this.population.push(sur);
                this.populationI[key] = sur;
            }
            return this;
        };

        /**
         * @param {number} nb
         * @param {number} timeoutMS
         * @param {CanPl.CanvasPlus} cplus
         * @return {GOL.Universe}
         */
        this.start = function(nb, timeoutMS, cplus){
            var i=0;
            var uni = this;
            var engine = function(){
                //console.log(i);
                uni.step();
                cplus.redraw();
                if(i++ > nb) return;
                setTimeout(engine, timeoutMS);
            };
            engine();
            return this;
        };
    };

    /** @typedef {{x:number,y:number,nb:?number}} */
    GOL.Cell;

    /**
     * @param {GOL.Cell} cell
     * @param {GOL.Universe} uni
     * @return {Array.<GOL.Cell>}
     */
    var getCellSurrounding = function(cell, uni) {
        var x1 = cell.x===0?uni.w-1:cell.x-1;
        var x2 = cell.x===uni.w-1?0:cell.x+1;
        var y1 = cell.y===0?uni.h-1:cell.y-1;
        var y2 = cell.y===uni.h-1?0:cell.y+1;
        return [
            { x:x1, y:y1 },
            { x:x1, y:cell.y },
            { x:x1, y:y2 },
            { x:cell.x, y:y1 },
            { x:cell.x, y:y2 },
            { x:x2, y:y1 },
            { x:x2, y:cell.y },
            { x:x2, y:y2 }
        ];
    };

    var cdiv = $("#cdiv");
    var uni = new GOL.Universe(cdiv.width(), cdiv.height()).fillRandomly(0.05);
    //var uni = new GOL.Universe(500, 300).fillRandomly(0.05);

    var cplus = new CanPl.CanvasPlus("canvas", cdiv.width(), cdiv.height());
    cplus.redraw = function(){
        var ctx = this.getContext2D();
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#0000FF";
        for(var i=0; i<uni.population.length; i++){
            /** @type {GOL.Cell} */
            var cell = uni.population[i];
            //ctx.beginPath();
            //ctx.arc(cell.x,cell.y,1,0,2*Math.PI);
            //ctx.fill();
            ctx.fillRect(cell.x,cell.y,1,1);
        }
    };

    //start
    uni.start(5000,0,cplus);

}( window.GOL = window.GOL || {}, jQuery ));
