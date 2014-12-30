//java -jar /home/juju/programmes/closure_compiler/compiler.jar --js src/gol.js --js_output_file dist/gol.min.js
//java -jar /home/juju/programmes/closure_compiler/compiler.jar --js src/gol.js --js_output_file dist/gol.min.js --compilation_level ADVANCED_OPTIMIZATIONS

GOL = {};

$(function() {
    (function(GOL,$) {
        //TODO do gol
        //TODO use canvas transform


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
                var id = x+"_"+y;
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
            this.x = x;
            this.y = y;
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
            return this.x+"_"+this.y;
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
        //@type {number}
        var w = cdiv.width();
        //@type {number}
        var h = cdiv.height();

        //@type {Universe}
        var uni = new GOL.Universe();

        //fill universe
        var i=0;
        while(i < 5000){
            var x = Math.round(w*Math.random());
            var y = Math.round(h*Math.random());
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
            //ctx.clearRect(0, 0, w, h);
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

        //while(true){
        var occ=0;
        while(occ++ < 5){
            console.log(occ);

            //surrounding count cells
            //TODO annotate
            var surI = {};
            //go through list of cells
            for(i=0; i<uni.population.length; i++){
                cell = uni.population[i];
                //get surrounding cells
                var srs = cell.getSurrounding();
                for(var j=0; j<srs.length; j++){
                    var sr = srs[j];
                    key = sr.getKey();
                    //+1 surrounding cells
                    var cell_ = surI[key];
                    if(cell_){
                        cell_.nb++;
                    } else {
                        sr.nb = 1;
                        surI[key] = sr;
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
                //TODO annotate
                var key = cell.getKey();
                //TODO annotate
                var sur_ = surI[key];
                if(!sur_) continue;
                //if (nb<2 or nb>3) -> kill
                if(sur_.nb == 2 || sur_.nb == 3){
                    cellsToKeep.push(cell);
                    cellsToKeepI[key] = cell;
                }
            }
            uni.population = cellsToKeep;
            uni.populationI = cellsToKeepI;

            //create new cells
            //TODO annotate
            var sur = GOL.objToArray(surI);
            for(i=0; i<sur.length; i++){
                //TODO annotate
                cell = sur[i];
                //TODO annotate
                nb = cell.nb;
                if(nb == 3){
                    cell.nb = 0;
                    uni.population.push(cell);
                    uni.populationI[cell.getKey()] = cell;
                }
            }

            //redraw
            GOL.redraw();
        }

    })(GOL,$);
});