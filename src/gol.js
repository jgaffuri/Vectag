//java -jar /home/juju/programmes/closure_compiler/compiler.jar --js src/gol.js --js_output_file dist/gol.min.js
//java -jar /home/juju/programmes/closure_compiler/compiler.jar --js src/gol.js --js_output_file dist/gol.min.js --compilation_level ADVANCED_OPTIMIZATIONS

var GOL =  GOL || {};

$(function() {
    (function(GOL,$) {
        //TODO blue stuff in annotations
        //TODO zoom/pan, with canvas transform
        //TODO check result... error?
        //TODO automate deployment (ant?)
        //TODO extract viewer
        //TODO buttons (play, stop, speed, draw, pan)
        //TODO module pattern

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
            /** @type {Object.<string, GOL.Cell>}
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
                //create new agent
                cell = new GOL.Cell(x,y);
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
             * @param {object} ctx
             * @return {GOL.Universe}
             */
            this.redraw = function(ctx){
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.fillStyle = "#0000FF";
                for(var i=0; i<this.population.length; i++){
                    /** @type {GOL.Cell} */
                    var cell = this.population[i];
                    //ctx.beginPath();
                    //ctx.arc(cell.x,cell.y,1,0,2*Math.PI);
                    //ctx.fill();
                    ctx.fillRect(cell.x,cell.y,1,1);
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
                    var srs = this.population[i].getSurrounding(this);
                    for(j=0; j<srs.length; j++){
                        cell = srs[j];
                        key = cell.getKey();
                        cell_ = surI[key];
                        if(cell_){
                            cell_.nb++;
                        } else {
                            cell.nb = 1;
                            surI[key] = cell;
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
                    key = cell.getKey();
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
                var sur = GOL.objToArray(surI);
                surI = null;
                for(i=0; i<sur.length; i++){
                    cell = sur[i];

                    if(cell.nb !== 3) continue;

                    //check if already alive
                    key = cell.getKey();
                    cell_ = this.populationI[key];
                    if(cell_) continue;

                    cell.nb = 0;
                    this.population.push(cell);
                    this.populationI[cell.getKey()] = cell;
                }
                return this;
            };

            /**
             * @param {number} nb
             * @param {number} timeoutMS
             * @param {object} ctx
             * @return {GOL.Universe}
             */
            this.start = function(nb, timeoutMS, ctx){
                var i=0;
                var uni = this;
                var engine = function(){
                    console.log(i);
                    uni.step();
                    uni.redraw(ctx);
                    if(i++ > nb) return;
                    setTimeout(engine, timeoutMS);
                };
                engine();
                return this;
            };
        };



        /**
         * @constructor
         * @struct
         * @param {number} x
         * @param {number} y
         */
        GOL.Cell = function(x,y){
            /** @type {number} */
            this.x = x;
            /** @type {number} */
            this.y = y;
            /** @type {number} */
            this.nb = 0;
        };

        /**
         * @param {GOL.Universe} uni
         * @return {Array.<GOL.Cell>}
         */
        GOL.Cell.prototype.getSurrounding = function(uni) {
            var x1 = this.x===0?uni.w-1:this.x-1;
            var x2 = this.x===uni.w-1?0:this.x+1;
            var y1 = this.y===0?uni.h-1:this.y-1;
            var y2 = this.y===uni.h-1?0:this.y+1;
            return [
                new GOL.Cell(x1,y1),
                new GOL.Cell(x1,this.y),
                new GOL.Cell(x1,y2),
                new GOL.Cell(this.x,y1),
                new GOL.Cell(this.x,y2),
                new GOL.Cell(x2,y1),
                new GOL.Cell(x2,this.y),
                new GOL.Cell(x2,y2)
            ];
        };

        /**
         * @return {string}
         */
        GOL.Cell.prototype.getKey = function() {
            return this.x + "_" + this.y;
        };

        /**
         * @param {object} elt
         * @param {object} e
         * @return {Object.<string, number>}
         */
        GOL.canvasClickPosition = function(elt, e){
            if (e.offsetX && e.offsetY)
                return {x:e.offsetX, y:e.offsetY};
            var tX=0, tY=0;
            do {
                tX += elt.offsetLeft - elt.scrollLeft;
                tY += elt.offsetTop - elt.scrollTop;
            } while(elt = elt.offsetParent);
            return {x:e.pageX-tX, y:e.pageY-tY}
        };

        /**
         * @template T
         * @param {Object.<?, T>} obj
         * @return {Array.<T>}
         */
        GOL.objToArray = function(obj){
            var out = [];
            for (var key in obj)
                if (obj.hasOwnProperty(key))
                    out.push(obj[key]);
            return out;
        };

        var cdiv = $("#cdiv");
        /**@type {number}*/
        var w = cdiv.width();
        /*@type {number}*/
        var h = cdiv.height();

        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext("2d");
        ctx.canvas.width  = w;
        ctx.canvas.height = h;

        $("#canvas").click(function(e) {
            console.log(GOL.canvasClickPosition(cvs, e));
        });

        //build and start
        new GOL.Universe(w,h).fillRandomly(0.2).redraw(ctx).start(500,1,ctx);

    })(GOL,$);
});
