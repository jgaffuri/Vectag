//java -jar /home/juju/programmes/closure_compiler/compiler.jar --js src/gol.js --js_output_file dist/gol.min.js
//java -jar /home/juju/programmes/closure_compiler/compiler.jar --js src/gol.js --js_output_file dist/gol.min.js --compilation_level ADVANCED_OPTIMIZATIONS

GOL = {};

$(function() {
    (function(GOL,$) {
        //TODO more annotations
        //TODO google compilation
        //TODO check result... error?
        //TODO use canvas transform
        //TODO buttons
        //TODO module pattern

        /**
         * @constructor
         */
        GOL.Universe = function(){
            /* @type {Array.<GOL.Cell>} */
            this.population = [];
            /* @type {Object.<string, GOL.Cell>} */
            this.populationI = {};

            /**
             * @param {number} x
             * @param {number} y
             * @return {GOL.Cell}
             */
            this.add = function(x,y){
                //find agent at location
                /* @type {string} */
                var id = x+"_"+y;
                /* @type {GOL.Cell} */
                var cell = this.populationI[id];
                if(cell) return null;
                //create new agent
                cell = new GOL.Cell(x,y);
                this.population.push(cell);
                this.populationI[id] = cell;
                return cell;
            }
        };

        /**
         * @constructor
         * @param {number} x
         * @param {number} y
         */
        GOL.Cell = function(x,y){
            /* @type {number} */
            this.x = x;
            /* @type {number} */
            this.y = y;
            /* @type {number} */
            this.nb = 0;
        };

        /**
         * @return {Array.<GOL.Cell>}
         */
        GOL.Cell.prototype.getSurrounding = function() {
            var x1 = this.x===0?w-1:this.x-1;
            var x2 = this.x===w-1?0:this.x+1;
            var y1 = this.y===0?h-1:this.y-1;
            var y2 = this.y===h-1?0:this.y+1;
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

        //TODO test generics here
        /**
         * @param {object} obj
         * @return {Array}
         */
        GOL.objToArray = function(obj){
            var out = [];
            for (var key in obj)
                if (obj.hasOwnProperty(key))
                    out.push(obj[key]);
            return out;
        };




        var cdiv = $("#cdiv");
        /*@type {number}*/
        var w = cdiv.width();
        /*@type {number}*/
        var h = cdiv.height();

        /* @type {GOL.Universe} */
        var uni = new GOL.Universe();

        //fill universe
        var i=0;
        while(i < 50000){
            var x = Math.round(w*Math.random());
            var y = Math.round(h*Math.random());
            /* @type {GOL.Cell} */
            var cell = uni.add(x,y);
            if(cell) i++;
        }

        $("#canvas").click(function(e) {
            console.log(GOL.canvasClickPosition(cvs, e));
        });

        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext("2d");
        ctx.canvas.width  = w;
        ctx.canvas.height = h;
        GOL.redraw = function(){
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "#0000FF";
            for(i=0; i<uni.population.length; i++){
                var cell = uni.population[i];
                ctx.beginPath();
                ctx.arc(cell.x,cell.y,1,0,2*Math.PI);
                ctx.fill();
            }
        };
        //draw universe
        GOL.redraw();

        var step = function() {
            //surrounding count cells
            /* @type {Object.<string, GOL.Cell>} */
            var surI = {};
            //go through list of cells
            for(i=0; i<uni.population.length; i++){
                // +1 surrounding cells
                /* @type {Array.<GOL.Cell>} */
                var srs = uni.population[i].getSurrounding();
                for(var j=0; j<srs.length; j++){
                    cell = srs[j];
                    /* @type {string} */
                    var key = cell.getKey();
                    /* @type {GOL.Cell} */
                    var cell_ = surI[key];
                    if(cell_){
                        cell_.nb++;
                    } else {
                        cell.nb = 1;
                        surI[key] = cell;
                    }
                }
            }

            //kill cells
            /* @type {Array.<GOL.Cell>} */
            var cellsToKeep = [];
            /* @type {Object.<string, GOL.Cell>} */
            var cellsToKeepI = {};
            for(i=0; i<uni.population.length; i++){
                cell = uni.population[i];
                key = cell.getKey();
                cell_ = surI[key];
                if(!cell_) continue;
                //if (nb<2 or nb>3) -> kill
                if(cell_.nb == 2 || cell_.nb == 3){
                    cellsToKeep.push(cell);
                    cellsToKeepI[key] = cell;
                }
            }
            uni.population = cellsToKeep;
            uni.populationI = cellsToKeepI;

            //create new cells
            /* @type {Array.<GOL.Cell>} */
            var sur = GOL.objToArray(surI);
            for(i=0; i<sur.length; i++){
                cell = sur[i];
                if(cell.nb != 3) continue;
                cell.nb = 0;
                uni.population.push(cell);
                uni.populationI[cell.getKey()] = cell;
            }

            //redraw
            GOL.redraw();
        };

        //launch
        var occNbMax = 500, occNb=0;
        var engine = function(){
            //console.log(occNb);
            step();
            if(occNb++>occNbMax) return;
            setTimeout(engine,1);
        }
        engine();

    })(GOL,$);
});
